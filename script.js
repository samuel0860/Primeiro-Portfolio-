// Alternância de imagens do perfil
let currentImage = 1;
setInterval(() => {
    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');
    
    if (currentImage === 1) {
        img1.classList.remove('active');
        img2.classList.add('active');
        currentImage = 2;
    } else {
        img2.classList.remove('active');
        img1.classList.add('active');
        currentImage = 1;
    }
}, 5000);

// Carregar projetos do GitHub (excluindo repositórios específicos)
async function loadGitHubProjects() {
    const container = document.getElementById('projects-container');
    
    // Lista de repositórios que NÃO devem aparecer
    const excludedRepos = ['Primeiro-Portfolio-', 'samuel0860'];
    
    try {
        const response = await fetch('https://api.github.com/users/samuel0860/repos?sort=updated&per_page=20');
        const repos = await response.json();
        
        // Filtrar repositórios excluídos
        const filteredRepos = repos.filter(repo => !excludedRepos.includes(repo.name));
        
        if (filteredRepos.length === 0) {
            container.innerHTML = '<p style="text-align: center; grid-column: 1/-1;">Nenhum projeto encontrado.</p>';
            return;
        }
        
        // Mostrar apenas os 6 primeiros após filtrar
        container.innerHTML = filteredRepos.slice(0, 6).map(repo => `
            <div class="project-card">
                <h3>${repo.name}</h3>
                <p>${repo.description || 'Sem descrição disponível'}</p>
                <p style="margin-top: 15px; color: #4a9eff;">
                    <i class="fas fa-star"></i> ${repo.stargazers_count} 
                    <i class="fas fa-code-branch" style="margin-left: 15px;"></i> ${repo.forks_count}
                </p>
                ${repo.language ? `<p style="margin-top: 10px; color: #7b68ee;"><i class="fas fa-code"></i> ${repo.language}</p>` : ''}
                <a href="${repo.html_url}" target="_blank" class="project-link">
                    Ver projeto <i class="fas fa-external-link-alt"></i>
                </a>
            </div>
        `).join('');
    } catch (error) {
        container.innerHTML = '<p style="text-align: center; grid-column: 1/-1; color: #ff6b6b;">Erro ao carregar projetos. Tente novamente mais tarde.</p>';
        console.error('Erro ao carregar projetos:', error);
    }
}

// Animação de scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Carregar projetos ao carregar a página
window.addEventListener('DOMContentLoaded', loadGitHubProjects);