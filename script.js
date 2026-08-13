/* ==========================================================================
   Harjas 1st Year Anniversary JavaScript Engine
   Formal & Elegant Phrasing Edition
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // ----------------------------------------------------------------------
    // 0. INTERACTIVE ENVELOPE REVEAL CARDS (Little Reasons Why I Care)
    // ----------------------------------------------------------------------
    document.querySelectorAll('.reason-card').forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('opened');
            if (typeof confetti === 'function' && card.classList.contains('opened')) {
                confetti({ particleCount: 20, spread: 40, origin: { y: 0.7 } });
            }
        });
    });

    // ----------------------------------------------------------------------
    // 0.05. FLIP CARD TAP SUPPORT FOR MOBILE DEVICES
    // ----------------------------------------------------------------------
    document.querySelectorAll('.flip-card').forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('active');
        });
    });

    // ----------------------------------------------------------------------
    // 0.1. INTERACTIVE TAP / CLICK MICRO HEART BURST (Cute Touch ✨)
    // ----------------------------------------------------------------------
    const heartEmojis = ['💖', '✨', '💕', '🌸', '🥰', '🎈'];
    
    document.addEventListener('click', (e) => {
        if (e.target.closest('button, input, textarea, a, .note-action-btn, .reason-card, .flip-card')) return;

        const heart = document.createElement('div');
        heart.className = 'tap-heart-burst';
        heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
        heart.style.left = `${e.clientX}px`;
        heart.style.top = `${e.clientY}px`;

        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 1000);
    });

    // ----------------------------------------------------------------------
    // 0.2. PRELOADER LOADING PAGE ENGINE (Before Homepage)
    // ----------------------------------------------------------------------
    const loadingScreen = document.getElementById('loadingScreen');
    const loadingBarFill = document.getElementById('loadingBarFill');
    const loadingPercent = document.getElementById('loadingPercent');
    const loadingNoteText = document.getElementById('loadingNoteText');
    const enterAppBtn = document.getElementById('enterAppBtn');

    const loadingNotes = [
        "Celebrating One Year Together with Harjas... ✨",
        "14th August 2025 ➔ 14th August 2026 ❤️",
        "By God's grace, 365 days of love & laughter... 🕊️",
        "Connecting Discord DMs & Voice Calls... 🎧",
        "Let's go on for a few years more... 💖"
    ];

    let currentProgress = 0;
    let noteIdx = 0;

    const noteInterval = setInterval(() => {
        noteIdx = (noteIdx + 1) % loadingNotes.length;
        if (loadingNoteText) {
            loadingNoteText.style.opacity = '0';
            setTimeout(() => {
                loadingNoteText.textContent = `"${loadingNotes[noteIdx]}"`;
                loadingNoteText.style.opacity = '1';
            }, 200);
        }
    }, 900);

    const progressInterval = setInterval(() => {
        currentProgress += Math.floor(Math.random() * 8) + 4;
        if (currentProgress >= 100) {
            currentProgress = 100;
            clearInterval(progressInterval);
            clearInterval(noteInterval);

            if (loadingBarFill) loadingBarFill.style.width = '100%';
            if (loadingPercent) loadingPercent.textContent = '100%';
            if (loadingNoteText) loadingNoteText.textContent = '"Welcome to Our One Year Together Sanctuary! ❤️"';

            if (enterAppBtn) {
                enterAppBtn.classList.add('visible');
                enterAppBtn.addEventListener('click', dismissLoadingScreen);
            } else {
                setTimeout(dismissLoadingScreen, 800);
            }
        } else {
            if (loadingBarFill) loadingBarFill.style.width = currentProgress + '%';
            if (loadingPercent) loadingPercent.textContent = currentProgress + '%';
        }
    }, 120);

    function dismissLoadingScreen() {
        if (!loadingScreen) return;
        loadingScreen.classList.add('fade-out');

        if (typeof confetti === 'function') {
            confetti({ particleCount: 70, spread: 80, origin: { y: 0.6 } });
        }

        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 600);
    }

    // ----------------------------------------------------------------------
    // 0.5. RUNAWAY "NO" BUTTON & "YES" UI LOVE MELT ENGINE
    // ----------------------------------------------------------------------
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');
    const mainAppContainer = document.getElementById('mainAppContainer');
    const loveMeltOverlay = document.getElementById('loveMeltOverlay');
    const meltHeartsContainer = document.getElementById('meltHeartsContainer');

    const runawayTexts = [
        "Nice try! 😜",
        "Can't click me! 🙈",
        "Nope! Try YES! 💖",
        "Yes only! 😉",
        "A few more years! 💖",
        "Uh oh, missed me! 🚀",
        "Press YES instead! ✨"
    ];

    let runawayIdx = 0;

    function relocateNoButton() {
        if (!noBtn) return;
        noBtn.classList.add('teleported');

        const btnWidth = noBtn.offsetWidth || 100;
        const btnHeight = noBtn.offsetHeight || 40;

        const maxLeft = Math.max(10, window.innerWidth - btnWidth - 20);
        const maxTop = Math.max(10, window.innerHeight - btnHeight - 70);

        const randomLeft = Math.floor(Math.random() * maxLeft);
        const randomTop = Math.floor(Math.random() * maxTop);

        noBtn.style.left = `${randomLeft}px`;
        noBtn.style.top = `${randomTop}px`;

        runawayIdx = (runawayIdx + 1) % runawayTexts.length;
        noBtn.querySelector('span').textContent = runawayTexts[runawayIdx];
    }

    if (noBtn) {
        noBtn.addEventListener('mouseover', relocateNoButton);
        noBtn.addEventListener('touchstart', (e) => {
            e.preventDefault();
            relocateNoButton();
        });
        noBtn.addEventListener('click', (e) => {
            e.preventDefault();
            relocateNoButton();
        });
    }

    if (yesBtn) {
        yesBtn.addEventListener('click', () => {
            startLoveBalloonsAnimation();

            if (typeof confetti === 'function') {
                const duration = 6 * 1000;
                const end = Date.now() + duration;

                (function frame() {
                    confetti({
                        particleCount: 8,
                        angle: 60,
                        spread: 70,
                        origin: { x: 0 },
                        colors: ['#E1306C', '#5865F2', '#ffffff', '#f0b232']
                    });
                    confetti({
                        particleCount: 8,
                        angle: 120,
                        spread: 70,
                        origin: { x: 1 },
                        colors: ['#E1306C', '#833ab4', '#ffffff']
                    });
                    if (Date.now() < end) {
                        requestAnimationFrame(frame);
                    }
                }());
            }

            if (mainAppContainer) {
                mainAppContainer.classList.add('ui-love-melt');
            }

            if (loveMeltOverlay) {
                loveMeltOverlay.classList.add('active');
                createFallingMeltHearts();
            }

            if (noBtn) noBtn.style.display = 'none';
        });
    }

    function createFallingMeltHearts() {
        if (!meltHeartsContainer) return;
        meltHeartsContainer.innerHTML = '';

        for (let i = 0; i < 30; i++) {
            const heart = document.createElement('div');
            heart.className = 'melt-heart-particle';
            heart.innerHTML = Math.random() > 0.5 ? '💖' : '🎈';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDelay = Math.random() * 3 + 's';
            heart.style.animationDuration = (Math.random() * 2 + 2.5) + 's';
            meltHeartsContainer.appendChild(heart);
        }
    }

    // ----------------------------------------------------------------------
    // 1. Live 1-Year Counter (August 14, 2025 to Present)
    // ----------------------------------------------------------------------
    const startDate = new Date('2025-08-14T00:00:00');

    function updateCounter() {
        const now = new Date();
        const diffMs = now - startDate;

        if (diffMs > 0) {
            const totalSeconds = Math.floor(diffMs / 1000);
            const days = Math.floor(totalSeconds / (3600 * 24));
            const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
            const mins = Math.floor((totalSeconds % 3600) / 60);
            const secs = Math.floor(totalSeconds % 60);

            const daysEl = document.getElementById('daysVal');
            const hoursEl = document.getElementById('hoursVal');
            const minsEl = document.getElementById('minsVal');
            const secsEl = document.getElementById('secsVal');

            if (daysEl) daysEl.textContent = days;
            if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
            if (minsEl) minsEl.textContent = String(mins).padStart(2, '0');
            if (secsEl) secsEl.textContent = String(secs).padStart(2, '0');
        }
    }
    updateCounter();
    setInterval(updateCounter, 1000);

    // ----------------------------------------------------------------------
    // 2. Midnight 12:00 AM Event Countdown & Celebration
    // ----------------------------------------------------------------------
    const midnightTarget = new Date('2026-08-14T00:00:00');
    let celebrationTriggered = false;

    function updateMidnightTimer() {
        const now = new Date();
        const diffMs = midnightTarget - now;

        if (diffMs <= 0 && !celebrationTriggered) {
            triggerMidnightCelebration();
        } else if (diffMs > 0) {
            const totalSecs = Math.floor(diffMs / 1000);
            const hours = Math.floor(totalSecs / 3600);
            const mins = Math.floor((totalSecs % 3600) / 60);
            const secs = Math.floor(totalSecs % 60);

            const mH = document.getElementById('mHours');
            const mM = document.getElementById('mMins');
            const mS = document.getElementById('mSecs');

            if (mH) mH.textContent = String(hours).padStart(2, '0');
            if (mM) mM.textContent = String(mins).padStart(2, '0');
            if (mS) mS.textContent = String(secs).padStart(2, '0');
        }
    }
    updateMidnightTimer();
    setInterval(updateMidnightTimer, 1000);

    const triggerMidnightBtn = document.getElementById('triggerMidnightBtn');
    if (triggerMidnightBtn) {
        triggerMidnightBtn.addEventListener('click', () => {
            triggerMidnightCelebration();
        });
    }

    const midnightModal = document.getElementById('midnightModal');
    const closeMidnightBtn = document.getElementById('closeMidnightBtn');
    if (closeMidnightBtn) {
        closeMidnightBtn.addEventListener('click', () => {
            midnightModal.classList.remove('active');
        });
    }

    function triggerMidnightCelebration() {
        celebrationTriggered = true;
        if (midnightModal) midnightModal.classList.add('active');

        startLoveBalloonsAnimation();

        if (typeof confetti === 'function') {
            const duration = 5 * 1000;
            const animationEnd = Date.now() + duration;

            (function frame() {
                const timeLeft = animationEnd - Date.now();
                if (timeLeft <= 0) return;

                confetti({
                    particleCount: 5,
                    angle: 60,
                    spread: 55,
                    origin: { x: 0 },
                    colors: ['#5865F2', '#E1306C', '#f0b232']
                });
                confetti({
                    particleCount: 5,
                    angle: 120,
                    spread: 55,
                    origin: { x: 1 },
                    colors: ['#E1306C', '#833ab4', '#ffffff']
                });

                requestAnimationFrame(frame);
            }());
        }
    }

    // ----------------------------------------------------------------------
    // 3. 3D Love Balloons Canvas Animation
    // ----------------------------------------------------------------------
    const balloonCanvas = document.getElementById('balloonCanvas');
    const bCtx = balloonCanvas.getContext('2d');

    function resizeBCanvas() {
        balloonCanvas.width = window.innerWidth;
        balloonCanvas.height = window.innerHeight;
    }
    resizeBCanvas();
    window.addEventListener('resize', resizeBCanvas);

    class Balloon {
        constructor() {
            this.reset();
        }
        reset() {
            this.x = Math.random() * balloonCanvas.width;
            this.y = balloonCanvas.height + Math.random() * 100 + 40;
            this.radius = Math.random() * 20 + 16;
            this.speedY = Math.random() * 1.5 + 1;
            this.swing = Math.random() * 2;
            this.swingSpeed = Math.random() * 0.03 + 0.01;
            this.angle = Math.random() * Math.PI * 2;
            this.color = Math.random() > 0.5 ? '#E1306C' : (Math.random() > 0.5 ? '#5865F2' : '#f0b232');
            this.isHeart = Math.random() > 0.3;
        }
        update() {
            this.y -= this.speedY;
            this.angle += this.swingSpeed;
            this.x += Math.sin(this.angle) * this.swing;
            if (this.y < -60) this.reset();
        }
        draw() {
            bCtx.save();
            bCtx.fillStyle = this.color;
            bCtx.globalAlpha = 0.85;

            if (this.isHeart) {
                bCtx.translate(this.x, this.y);
                bCtx.beginPath();
                const topCurveHeight = this.radius * 0.7;
                bCtx.moveTo(0, topCurveHeight);
                bCtx.bezierCurveTo(
                    0, 0, 
                    -this.radius, 0, 
                    -this.radius, topCurveHeight
                );
                bCtx.bezierCurveTo(
                    -this.radius, (this.radius + topCurveHeight) / 2, 
                    0, this.radius * 1.5, 
                    0, this.radius * 1.8
                );
                bCtx.bezierCurveTo(
                    0, this.radius * 1.8, 
                    this.radius, (this.radius + topCurveHeight) / 2, 
                    this.radius, topCurveHeight
                );
                bCtx.bezierCurveTo(
                    this.radius, 0, 
                    0, 0, 
                    0, topCurveHeight
                );
                bCtx.closePath();
                bCtx.fill();
            } else {
                bCtx.beginPath();
                bCtx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                bCtx.fill();
            }
            bCtx.restore();
        }
    }

    let balloons = [];
    let balloonAnimRunning = false;

    function startLoveBalloonsAnimation() {
        if (balloonAnimRunning) return;
        balloonAnimRunning = true;
        balloons = Array.from({ length: 25 }, () => new Balloon());
        animateBalloons();
    }

    function animateBalloons() {
        bCtx.clearRect(0, 0, balloonCanvas.width, balloonCanvas.height);
        balloons.forEach(b => {
            b.update();
            b.draw();
        });
        if (balloonAnimRunning) {
            requestAnimationFrame(animateBalloons);
        }
    }

    // ----------------------------------------------------------------------
    // 4. Mobile Sidebar Drawer & Backdrop Handler
    // ----------------------------------------------------------------------
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const closeSidebarBtn = document.getElementById('closeSidebarBtn');
    const channelsSidebar = document.getElementById('channelsSidebar');
    const drawerBackdrop = document.getElementById('drawerBackdrop');

    function openDrawer() {
        if (channelsSidebar) channelsSidebar.classList.add('mobile-open');
        if (drawerBackdrop) drawerBackdrop.classList.add('active');
    }

    function closeDrawer() {
        if (channelsSidebar) channelsSidebar.classList.remove('mobile-open');
        if (drawerBackdrop) drawerBackdrop.classList.remove('active');
    }

    if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openDrawer);
    if (closeSidebarBtn) closeSidebarBtn.addEventListener('click', closeDrawer);
    if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);

    document.querySelectorAll('.channel-item, .mobile-nav-item, .timeline-node').forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                e.preventDefault();
                const targetEl = document.querySelector(targetId);
                if (targetEl) {
                    targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
                closeDrawer();
            }
        });
    });

    // ----------------------------------------------------------------------
    // 5. 3D Tilt Card Interaction Engine
    // ----------------------------------------------------------------------
    const tiltElements = document.querySelectorAll('.tilt-element');

    tiltElements.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * -6;
            const rotateY = ((x - centerX) / centerX) * 6;
            
            el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });

        el.addEventListener('mouseleave', () => {
            el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        });
    });

    // ----------------------------------------------------------------------
    // 6. Hero CTA: "Let's go on for few years more" Heart Explosion
    // ----------------------------------------------------------------------
    const letsGoBtn = document.getElementById('letsGoBtn');
    const promiseSection = document.getElementById('promise-section');

    if (letsGoBtn && promiseSection) {
        letsGoBtn.addEventListener('click', () => {
            if (typeof confetti === 'function') {
                const count = 220;
                const defaults = { origin: { y: 0.7 } };

                function fire(particleRatio, opts) {
                    confetti(Object.assign({}, defaults, opts, {
                        particleCount: Math.floor(count * particleRatio)
                    }));
                }

                fire(0.25, { spread: 26, startVelocity: 55, colors: ['#5865F2', '#E1306C'] });
                fire(0.2, { spread: 60, colors: ['#ffffff', '#f0b232'] });
                fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
                fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, colors: ['#E1306C', '#833ab4'] });
                fire(0.1, { spread: 120, startVelocity: 45 });
            }

            promiseSection.scrollIntoView({ behavior: 'smooth', block: 'center' });

            promiseSection.style.border = '2px solid #E1306C';
            promiseSection.style.boxShadow = '0 0 45px rgba(225, 48, 108, 0.85)';
            setTimeout(() => {
                promiseSection.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.6)';
            }, 3000);
        });
    }

    // ----------------------------------------------------------------------
    // 7. Story Viewer Modal
    // ----------------------------------------------------------------------
    const storiesData = [
        {
            title: "14th August 2025 — The Day We Met",
            desc: "The fateful day we connected during an academic discussion. Exchanging Discord IDs with Harjas opened this beautiful journey! ⚖️✨",
            date: "14 Aug 2025",
            img: "./assets/pfp_sunset.jpg"
        },
        {
            title: "First Discord DMs 💬",
            desc: "My initial pings, sharing favorite songs, talking about our days, and getting to know Harjas step by step on Discord.",
            date: "August 2025",
            img: "./assets/pfp_sunset.jpg"
        },
        {
            title: "Late Night Voice Calls 🎙️",
            desc: "Countless hours spent connected in voice calls with Harjas. Studying together, laughing, and falling asleep on call.",
            date: "Late Nights",
            img: "./assets/pfp_sunset.jpg"
        },
        {
            title: "Subtle Ups & Downs 🤝",
            desc: "Life brought subtle ups and downs, but we stayed grounded. We held on tighter and never let each other down.",
            date: "Throughout The Year",
            img: "./assets/pfp_sunset.jpg"
        },
        {
            title: "Celebrating One Year Together 🕊️",
            desc: "Today I celebrate one full year of love, patience, and growth with Harjas by God's grace. Happy Anniversary Harjas! ❤️",
            date: "14 Aug 2026",
            img: "./assets/pfp_sunset.jpg"
        }
    ];

    let currentStoryIdx = 0;
    let storyTimer = null;
    let storyProgress = 0;

    const storyModal = document.getElementById('storyModal');
    const storyCloseBtn = document.getElementById('storyCloseBtn');
    const storyProgressFill = document.getElementById('storyProgressFill');
    const storySlideTitle = document.getElementById('storySlideTitle');
    const storySlideDesc = document.getElementById('storySlideDesc');
    const storyTimeText = document.getElementById('storyTimeText');
    const storyAvatarImg = document.getElementById('storyAvatarImg');
    const storyLikeBtn = document.getElementById('storyLikeBtn');

    document.querySelectorAll('.story-item').forEach(item => {
        item.addEventListener('click', () => {
            const storyId = parseInt(item.getAttribute('data-story')) - 1;
            openStory(storyId);
        });
    });

    function openStory(idx) {
        currentStoryIdx = idx;
        if (storyModal) storyModal.classList.add('active');
        showSlide(currentStoryIdx);
    }

    function showSlide(idx) {
        if (idx >= storiesData.length) {
            closeStory();
            return;
        }

        const slide = storiesData[idx];
        if (storySlideTitle) storySlideTitle.textContent = slide.title;
        if (storySlideDesc) storySlideDesc.textContent = slide.desc;
        if (storyTimeText) storyTimeText.textContent = slide.date;
        if (storyAvatarImg) storyAvatarImg.src = slide.img;

        if (storyProgressFill) storyProgressFill.style.width = '0%';
        storyProgress = 0;

        clearInterval(storyTimer);
        storyTimer = setInterval(() => {
            storyProgress += 2;
            if (storyProgressFill) storyProgressFill.style.width = storyProgress + '%';
            if (storyProgress >= 100) {
                clearInterval(storyTimer);
                currentStoryIdx++;
                showSlide(currentStoryIdx);
            }
        }, 100);
    }

    function closeStory() {
        clearInterval(storyTimer);
        if (storyModal) storyModal.classList.remove('active');
    }

    if (storyCloseBtn) storyCloseBtn.addEventListener('click', closeStory);
    const storyOverlay = document.querySelector('.story-modal-overlay');
    if (storyOverlay) storyOverlay.addEventListener('click', closeStory);

    if (storyLikeBtn) {
        storyLikeBtn.addEventListener('click', () => {
            storyLikeBtn.classList.toggle('liked');
            if (typeof confetti === 'function' && storyLikeBtn.classList.contains('liked')) {
                confetti({ particleCount: 30, spread: 50, origin: { y: 0.8 } });
            }
        });
    }

    // ----------------------------------------------------------------------
    // 8. Reaction Pills Counter
    // ----------------------------------------------------------------------
    document.querySelectorAll('.reaction-pill').forEach(pill => {
        pill.addEventListener('click', () => {
            let countEl = pill.querySelector('.reaction-count');
            let current = parseInt(pill.getAttribute('data-count')) || 0;
            if (pill.classList.contains('user-reacted')) {
                current -= 1;
                pill.classList.remove('user-reacted');
            } else {
                current += 1;
                pill.classList.add('user-reacted');
            }
            pill.setAttribute('data-count', current);
            if (countEl) countEl.textContent = current;
        });
    });

    // ----------------------------------------------------------------------
    // 9. Quick Love Note Buttons & Note Sender Engine
    // ----------------------------------------------------------------------
    const customMsgInput = document.getElementById('customMsgInput');
    const sendMsgBtn = document.getElementById('sendMsgBtn');
    const chatContainer = document.getElementById('chatContainer');

    document.querySelectorAll('.quick-emoji-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const presetText = btn.getAttribute('data-text');
            if (presetText && customMsgInput) {
                customMsgInput.value = presetText;
                sendUserMessage();
            }
        });
    });

    function createNoteElement(text) {
        const msgEl = document.createElement('article');
        msgEl.className = 'discord-message user-sent tilt-element';
        msgEl.innerHTML = `
            <div class="note-actions">
                <button class="note-action-btn edit-btn" title="Edit Note"><i class="fa-solid fa-pen"></i></button>
                <button class="note-action-btn delete-btn" title="Delete Note"><i class="fa-solid fa-trash"></i></button>
            </div>
            <div class="msg-avatar">
                <img src="./assets/pfp_sunset.jpg" alt="Memory" class="pfp-enhanced">
            </div>
            <div class="msg-content">
                <div class="msg-author-row">
                    <span class="msg-timestamp"><i class="fa-solid fa-heart"></i> Personal Note</span>
                </div>
                <div class="msg-body">${escapeHTML(text)}</div>
                <div class="msg-reactions">
                    <div class="reaction-pill active" data-count="1">
                        <span class="reaction-emoji">💖</span>
                        <span class="reaction-count">1</span>
                    </div>
                </div>
            </div>
        `;

        const deleteBtn = msgEl.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', () => {
            msgEl.style.opacity = '0';
            msgEl.style.transform = 'scale(0.9)';
            setTimeout(() => {
                msgEl.remove();
            }, 300);
        });

        const editBtn = msgEl.querySelector('.edit-btn');
        const msgBody = msgEl.querySelector('.msg-body');

        editBtn.addEventListener('click', () => {
            if (msgEl.querySelector('.edit-note-box')) return;

            const currentText = msgBody.textContent.trim();
            msgBody.style.display = 'none';

            const editBox = document.createElement('div');
            editBox.className = 'edit-note-box';
            editBox.innerHTML = `
                <textarea class="edit-note-textarea">${escapeHTML(currentText)}</textarea>
                <div class="edit-btn-row">
                    <button class="edit-cancel-btn">Cancel</button>
                    <button class="edit-save-btn">Save Edit</button>
                </div>
            `;

            msgBody.after(editBox);

            const saveBtn = editBox.querySelector('.edit-save-btn');
            const cancelBtn = editBox.querySelector('.edit-cancel-btn');
            const textarea = editBox.querySelector('.edit-note-textarea');

            saveBtn.addEventListener('click', () => {
                const newText = textarea.value.trim();
                if (newText) {
                    msgBody.textContent = newText;
                }
                editBox.remove();
                msgBody.style.display = 'block';
            });

            cancelBtn.addEventListener('click', () => {
                editBox.remove();
                msgBody.style.display = 'block';
            });
        });

        return msgEl;
    }

    function sendUserMessage() {
        const text = customMsgInput.value.trim();
        if (!text) return;

        const noteEl = createNoteElement(text);
        if (chatContainer) {
            chatContainer.appendChild(noteEl);
            customMsgInput.value = '';
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }

        if (typeof confetti === 'function') {
            confetti({ particleCount: 40, spread: 60, origin: { y: 0.9 } });
        }
    }

    if (sendMsgBtn) sendMsgBtn.addEventListener('click', sendUserMessage);
    if (customMsgInput) {
        customMsgInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') sendUserMessage();
        });
    }

    function escapeHTML(str) {
        return str.replace(/[&<>'"]/g, 
            tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
        );
    }

    // ----------------------------------------------------------------------
    // 10. Background Floating Particle Canvas
    // ----------------------------------------------------------------------
    const canvas = document.getElementById('bgCanvas');
    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Particle {
        constructor() {
            this.reset();
        }
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = canvas.height + Math.random() * 20;
            this.size = Math.random() * 8 + 4;
            this.speedY = Math.random() * 1.2 + 0.3;
            this.opacity = Math.random() * 0.5 + 0.2;
            this.color = Math.random() > 0.5 ? '#5865F2' : '#E1306C';
        }
        update() {
            this.y -= this.speedY;
            if (this.y < -20) this.reset();
        }
        draw() {
            ctx.save();
            ctx.globalAlpha = this.opacity;
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size / 2, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }
    }

    const particles = Array.from({ length: 35 }, () => new Particle());

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        requestAnimationFrame(animateParticles);
    }
    animateParticles();
});
