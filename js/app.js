// Valentine's App - All-in-one JavaScript
(function() {
    'use strict';

    // ===== DATA =====
    const folderData = {
      1: {
            title: "Love Letter",
            content: `
                <div style="font-family: 'Georgia', serif; line-height: 1.8; padding: 20px; color: #000000;">
                    <p style="margin-bottom: 15px; font-weight: bold; font-size: 1.1rem;">My Always in All Ways,</p>
                    
                    <p style="margin-bottom: 15px;">Happy Valentine’s Day, my love! We’ve celebrated so many Valentine’s Days together—from our high school days until now. Whether the celebration was grand or simple, every single one has been special because I was with you. I truly hope we’ll have many more Valentine’s Days to spend together in the future. Being with you never gets old, bebe.</p>
                    
                    <p style="margin-bottom: 15px;">Every day with you feels special, even the most ordinary ones. You make me fall in love with you over and over again. In both sadness and happiness, you’re the only person I want by my side. You make everything easier for me. Every part of who I am has you in it.</p>
                    
                    <p style="margin-bottom: 15px;">I am so grateful for every memory we've created together, and I can't wait to build new things with you. You are my best friend, my partner, and my greatest love. You are my everything.</p>
                    
                    <p style="margin-bottom: 25px;">Thank you for being you, and for choosing to share your life with me.</p>
                    <p style="margin-bottom: 25px;">I love you sooo muchhh!! MWAAAAAA</p>
                    
                    <div style="margin-top: 30px; border-top: 1px solid rgba(0,0,0,0.05); padding-top: 15px;">
                        <p style="margin-bottom: 5px;">Your Tangi,</p>
                        <p style="font-weight: bold; font-size: 1.1rem; color: var(--color-primary);">Ronniel S. Victa</p>
                    </div>
                </div>
            `
        },
       2: {
            title: "Some of My Current Favorite Photos of You",
            content: `
                <div style="text-align: center; padding: 10px;">
                    <p style="margin-bottom: 20px; font-size: 16px; color: #555;">The most beautiful girl in the whole woooorld.</p>
                    
                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-top: 10px;">
                        <div style="aspect-ratio: 1/1; overflow: hidden; border-radius: 12px; background: rgba(0,0,0,0.05);">
                            <img src="assets/1.jpeg" alt="Moment 1" style="width: 100%; height: 100%; object-fit: cover;">
                        </div>
                        
                        <div style="aspect-ratio: 1/1; overflow: hidden; border-radius: 12px; background: rgba(0,0,0,0.05);">
                            <img src="assets/2.jpeg" alt="Moment 2" style="width: 100%; height: 100%; object-fit: cover;">
                        </div>
                        
                        <div style="aspect-ratio: 1/1; overflow: hidden; border-radius: 12px; background: rgba(0,0,0,0.05);">
                            <img src="assets/3.jpeg" alt="Moment 3" style="width: 100%; height: 100%; object-fit: cover;">
                        </div>
                        
                        <div style="aspect-ratio: 1/1; overflow: hidden; border-radius: 12px; background: rgba(0,0,0,0.05);">
                            <img src="assets/4.jpeg" alt="Moment 4" style="width: 100%; height: 100%; object-fit: cover;">
                        </div>
                    </div>
                    
                  
                </div>
            `
        },
        3: {
            title: "Our Playlist",
            getContent: function() {
                return `
                    <div style="text-align: center; padding: 20px;">
                        <p style="margin-bottom: 20px; font-size: 16px;">Mga Kantang Inaalay ko sa'yo</p>
                        
                        <div style="margin: 20px 0;">
                            <a href="https://open.spotify.com/playlist/43LBaobPWejk8Hv80FdmsF" 
                               target="_blank" 
                               style="display: inline-block; background: #1DB954; color: white; padding: 12px 25px; border-radius: 10px; text-decoration: none; font-weight: bold; box-shadow: 0 4px 6px rgba(29, 185, 84, 0.3);">
                                Open Full Playlist on Spotify
                            </a>
                        </div>

                        <div id="dynamic-playlist-container" style="text-align: left; max-width: 500px; margin: 20px auto; background: rgba(255,255,255,0.05); padding: 15px; border-radius: 15px;">
                            <p id="playlist-status" style="font-size: 13px; color: #666; text-align: center; margin-bottom: 15px;">
                                <span style="color: #fa243c;"></span> Loading songs from our playlist...
                            </p>
                            <div id="live-song-list"></div>
                        </div>
                    </div>
                `;
            },
            async loadDynamic() {
                const container = document.getElementById('live-song-list');
                const status = document.getElementById('playlist-status');
                
                if (!container || !status) return;
                
                const playlistId = '43LBaobPWejk8Hv80FdmsF';
                
                try {
                    // Fetch playlist data from Spotify's oEmbed endpoint
                    const response = await fetch(`https://open.spotify.com/oembed?url=https://open.spotify.com/playlist/${playlistId}`);
                    
                    if (!response.ok) {
                        throw new Error('Failed to fetch playlist');
                    }
                    
                    // Since we can't access the Spotify API without authentication,
                    // we'll use the embed player for the entire playlist and show random track embeds
                    
                    status.innerHTML = '<span style="color: #fa243c;"></span> Preview:';
                    
                    // Embed the full playlist player
                    container.innerHTML = `
                        <div style="margin-bottom: 15px; background: rgba(250, 36, 60, 0.05); border-radius: 12px; padding: 10px; overflow: hidden;">
                            <iframe 
                                style="border-radius: 12px; width: 100%;" 
                                src="https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0" 
                                height="380" 
                                frameBorder="0" 
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                                loading="lazy">
                            </iframe>
                        </div>
                    `;
                    
                } catch (err) {
                    console.error('Error loading playlist:', err);
                    status.innerHTML = '<span style="color: #fa243c;">♥</span> Playlist ready!';
                    
                    // Fallback: show playlist embed
                    container.innerHTML = `
                        <div style="margin-bottom: 15px; background: rgba(250, 36, 60, 0.05); border-radius: 12px; padding: 10px; overflow: hidden;">
                            <iframe 
                                style="border-radius: 12px; width: 100%;" 
                                src="https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0" 
                                height="380" 
                                frameBorder="0" 
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                                loading="lazy">
                            </iframe>
                        </div>
                    `;
                }
            }
        },
        4: {
            title: "Things You Remind Me Of",
            content: `
                <ul>
                    <li>The warmth of coming home</li>
                    <li>Favorite songs that never get old</li>
                    <li>The stories you love </li>
                    <li>Starlit nights</li>
                    <li>Tulips as lovely as you</li>
                    <li>The smell of the lavander scent</li>
                    <li>The comfort of my favorite sweater</li>
                    <li>Laughter that makes my heart full of happiness</li>
                    <li>Everything beautiful and good in this world</li>
                </ul>
            `
        }
    };

    // ===== NAVIGATION =====
    class Navigation {
        constructor() {
            this.currentPage = 'proposal-page';
        }

        goToPage(pageId) {
            const current = document.getElementById(this.currentPage);
            if (current) {
                current.classList.remove('active');
            }

            const newPage = document.getElementById(pageId);
            if (newPage) {
                setTimeout(() => {
                    newPage.classList.add('active');
                    this.currentPage = pageId;
                }, 300);
            }
        }

        showModal(modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        hideModal(modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }

    // ===== UI =====
    class UI {
        constructor() {}

        showGlobalBack() {
            const backBtn = document.getElementById('global-back-btn');
            if (backBtn) {
                backBtn.classList.add('show');
            }
        }

        hideGlobalBack() {
            const backBtn = document.getElementById('global-back-btn');
            if (backBtn) {
                backBtn.classList.remove('show');
            }
        }

        updateModalContent(title, content) {
            const modalTitle = document.getElementById('modal-title');
            const modalBody = document.getElementById('modal-body');

            if (modalTitle) modalTitle.textContent = title;
            if (modalBody) modalBody.innerHTML = content;
        }
    }

    // ===== EVENTS =====
    class Events {
        constructor(navigation, ui) {
            this.nav = navigation;
            this.ui = ui;
            this.init();
        }

        init() {
            this.setupProposalButtons();
            this.setupNavigationButtons();
            this.setupFolderClicks();
            this.setupModalClose();
        }

        setupProposalButtons() {
            const yesBtn = document.getElementById('yes-btn');
            const noBtn = document.getElementById('no-btn');

            if (yesBtn) {
                yesBtn.addEventListener('click', () => {
                    this.nav.goToPage('intro-page');
                });
            }

            if (noBtn) {
                noBtn.addEventListener('click', () => {
                    this.nav.goToPage('rejection-page');
                });
            }
        }

        setupNavigationButtons() {
            const reconsiderBtn = document.getElementById('reconsider-btn');
            const continueBtn = document.getElementById('continue-btn');
            const globalBackBtn = document.getElementById('global-back-btn');

            if (reconsiderBtn) {
                reconsiderBtn.addEventListener('click', () => {
                    this.nav.goToPage('proposal-page');
                });
            }

            if (continueBtn) {
                continueBtn.addEventListener('click', () => {
                    this.nav.goToPage('folders-page');
                    this.ui.showGlobalBack();
                });
            }

            if (globalBackBtn) {
                globalBackBtn.addEventListener('click', () => {
                    this.handleGlobalBack();
                });
            }
        }

        setupFolderClicks() {
            const folders = document.querySelectorAll('.folder');
            const modal = document.getElementById('folder-modal');

            folders.forEach(folder => {
                folder.addEventListener('click', async () => {
                    const folderNum = folder.dataset.folder;
                    const data = folderData[folderNum];

                    if (data) {
                        // Get content - use getContent() if it exists, otherwise use content property
                        const content = data.getContent ? data.getContent() : data.content;
                        
                        this.ui.updateModalContent(data.title, content);
                        this.nav.showModal(modal);
                        
                        // Load dynamic content for playlist folder
                        if (folderNum === '3' && data.loadDynamic) {
                            // Small delay to ensure DOM is ready
                            setTimeout(() => {
                                data.loadDynamic();
                            }, 100);
                        }
                    }
                });
            });
        }

        setupModalClose() {
            const modal = document.getElementById('folder-modal');
            const closeBtn = document.querySelector('.modal-close');

            if (closeBtn) {
                closeBtn.addEventListener('click', () => {
                    this.nav.hideModal(modal);
                });
            }

            if (modal) {
                modal.addEventListener('click', (e) => {
                    if (e.target === modal) {
                        this.nav.hideModal(modal);
                    }
                });
            }

            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && modal.classList.contains('active')) {
                    this.nav.hideModal(modal);
                }
            });
        }

        handleGlobalBack() {
            const modal = document.getElementById('folder-modal');
            if (modal && modal.classList.contains('active')) {
                this.nav.hideModal(modal);
            } else if (this.nav.currentPage === 'folders-page') {
                this.nav.goToPage('intro-page');
                this.ui.hideGlobalBack();
            } else if (this.nav.currentPage === 'intro-page') {
                this.nav.goToPage('proposal-page');
                this.ui.hideGlobalBack();
            } else if (this.nav.currentPage === 'rejection-page') {
                this.nav.goToPage('proposal-page');
            }
        }
    }

    // ===== APP INITIALIZATION =====
    class ValentinesApp {
        constructor() {
            this.navigation = new Navigation();
            this.ui = new UI();
            this.events = new Events(this.navigation, this.ui);
            this.init();
        }

        init() {
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', () => this.setup());
            } else {
                this.setup();
            }
        }

        setup() {
            console.log('Valentine\'s App Initialized');
        }
    }

    new ValentinesApp();

})();