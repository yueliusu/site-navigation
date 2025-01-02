document.addEventListener('DOMContentLoaded', () => {
    // 初始化侧边栏状态
    initializeSidebar();
    
    // 初始化拖拽功能
    initializeDragAndDrop();
    
    // 初始化平滑滚动
    initializeSmoothScroll();
});

// 侧边栏功能
function initializeSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const toggleBtn = document.querySelector('.toggle-sidebar');
    const mainContent = document.querySelector('.main-content');
    
    // 从本地存储中获取侧边栏状态
    const isSidebarCollapsed = localStorage.getItem('sidebarCollapsed') === 'true';
    if (isSidebarCollapsed) {
        sidebar.classList.add('collapsed');
    }
    
    // 切换侧边栏状态
    toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
        localStorage.setItem('sidebarCollapsed', sidebar.classList.contains('collapsed'));
    });
    
    // 处理移动端响应
    const handleResize = () => {
        if (window.innerWidth <= 768) {
            sidebar.classList.add('collapsed');
            mainContent.style.marginLeft = '0';
        } else {
            sidebar.classList.remove('show');
            mainContent.style.marginLeft = sidebar.classList.contains('collapsed') ? '80px' : '240px';
        }
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
}

// 拖拽功能
function initializeDragAndDrop() {
    const siteGrids = document.querySelectorAll('.site-grid');
    
    siteGrids.forEach(grid => {
        const items = grid.querySelectorAll('.site-item');
        
        items.forEach(item => {
            item.setAttribute('draggable', true);
            
            item.addEventListener('dragstart', (e) => {
                e.target.classList.add('dragging');
                e.dataTransfer.setData('text/plain', e.target.innerHTML);
            });
            
            item.addEventListener('dragend', (e) => {
                e.target.classList.remove('dragging');
            });
            
            item.addEventListener('dragover', (e) => {
                e.preventDefault();
                const draggingItem = document.querySelector('.dragging');
                if (draggingItem !== item) {
                    const rect = item.getBoundingClientRect();
                    const offset = e.clientY - rect.top - rect.height / 2;
                    
                    if (offset < 0 && item.previousElementSibling !== draggingItem) {
                        item.parentNode.insertBefore(draggingItem, item);
                    } else if (offset > 0 && item.nextElementSibling !== draggingItem) {
                        item.parentNode.insertBefore(draggingItem, item.nextElementSibling);
                    }
                }
            });
        });
    });
}

// 平滑滚动
function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // 更新活动状态
                document.querySelectorAll('.sidebar-nav a').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });
    
    // 监听滚动以更新活动状态
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateActiveSection();
                ticking = false;
            });
            ticking = true;
        }
    });
}

// 更新当前活动的部分
function updateActiveSection() {
    const sections = document.querySelectorAll('.card');
    const navLinks = document.querySelectorAll('.sidebar-nav a');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
            currentSection = '#' + section.closest('[id]').id;
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentSection) {
            link.classList.add('active');
        }
    });
}
