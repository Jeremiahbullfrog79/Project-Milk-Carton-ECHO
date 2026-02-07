// ECHO Game Engine - Multi-perspective narrative system

class GameEngine {
    constructor() {
        this.currentScenario = null;
        this.currentPerspective = 'child'; // Start with child perspective
        this.perspectives = ['child', 'parent', 'community'];
        this.perspectiveIndex = 0;
        this.currentScene = 0;
        this.choices = [];
        this.gameData = {
            ageRange: null,
            scenarioId: null
        };
    }

    init(ageRange, scenarioId) {
        this.gameData.ageRange = ageRange;
        this.gameData.scenarioId = scenarioId;
        this.currentScenario = getScenario(ageRange, scenarioId);

        if (!this.currentScenario) {
            this.showError('Scenario not found');
            return;
        }

        this.startPerspective('child');
    }

    startPerspective(perspective) {
        this.currentPerspective = perspective;
        this.currentScene = 0;
        this.updateHeader();
        this.showIntro();
    }

    updateHeader() {
        document.getElementById('scenario-title').textContent = this.currentScenario.title;
        const perspectiveNames = {
            'child': 'Your Perspective',
            'parent': 'Parent Perspective',
            'community': 'Community Perspective'
        };
        document.getElementById('current-perspective').textContent = perspectiveNames[this.currentPerspective];
        this.updateProgress();
    }

    updateProgress() {
        const totalPerspectives = this.perspectives.length;
        const currentIndex = this.perspectives.indexOf(this.currentPerspective);
        const perspectiveProgress = (currentIndex / totalPerspectives) * 100;

        const scenesInPerspective = this.currentScenario.perspectives[this.currentPerspective].scenes.length;
        const sceneProgress = (this.currentScene / scenesInPerspective) * (100 / totalPerspectives);

        const totalProgress = perspectiveProgress + sceneProgress;
        document.getElementById('progress-bar').style.width = totalProgress + '%';
    }

    showIntro() {
        const perspectiveData = this.currentScenario.perspectives[this.currentPerspective];
        const gameScreen = document.getElementById('game-screen');

        const perspectiveClass = `perspective-${this.currentPerspective}`;
        const perspectiveNames = {
            'child': 'YOUR PERSPECTIVE',
            'parent': 'PARENT PERSPECTIVE',
            'community': 'COMMUNITY PERSPECTIVE'
        };

        gameScreen.innerHTML = `
            <span class="perspective-badge ${perspectiveClass}">${perspectiveNames[this.currentPerspective]}</span>
            <h3 style="margin: 30px 0 20px 0; font-size: 1.8rem; color: var(--accent-color);">The Situation</h3>
            <p class="dialogue-text">${perspectiveData.intro}</p>
            <button class="btn-primary" onclick="game.nextScene()" style="margin-top: 30px;">Begin</button>
        `;
    }

    showScene() {
        const perspectiveData = this.currentScenario.perspectives[this.currentPerspective];
        const scene = perspectiveData.scenes[this.currentScene];

        if (!scene) {
            this.showPerspectiveComplete();
            return;
        }

        const gameScreen = document.getElementById('game-screen');

        let choicesHTML = scene.choices.map((choice, index) => `
            <button class="choice-btn" onclick="game.makeChoice(${index})">
                ${choice.text}
            </button>
        `).join('');

        let ariaHTML = '';
        if (scene.ariaHint) {
            ariaHTML = `
                <div class="aria-assistant">
                    <p style="color: var(--text-primary); margin: 0;"><strong>💡 ARIA Tip:</strong> ${scene.ariaHint}</p>
                </div>
            `;
        }

        gameScreen.innerHTML = `
            <p class="dialogue-text">${scene.text}</p>
            ${ariaHTML}
            <div class="choices">
                ${choicesHTML}
            </div>
        `;

        this.updateProgress();
    }

    makeChoice(choiceIndex) {
        const perspectiveData = this.currentScenario.perspectives[this.currentPerspective];
        const scene = perspectiveData.scenes[this.currentScene];
        const choice = scene.choices[choiceIndex];

        this.choices.push({
            perspective: this.currentPerspective,
            scene: this.currentScene,
            choice: choice.text,
            safety: choice.safety
        });

        this.showChoiceResult(choice);
    }

    showChoiceResult(choice) {
        const gameScreen = document.getElementById('game-screen');

        const safetyColors = {
            'safe': 'outcome-positive',
            'moderate': 'outcome-learning',
            'risky': 'outcome-learning',
            'unsafe': 'outcome-negative'
        };

        const safetyLabels = {
            'safe': '✓ Safe Choice',
            'moderate': '⚠ Moderate Risk',
            'risky': '⚠ Risky Choice',
            'unsafe': '✗ Unsafe Choice'
        };

        gameScreen.innerHTML = `
            <div class="reflection-screen">
                <span class="outcome-badge ${safetyColors[choice.safety]}">${safetyLabels[choice.safety]}</span>
                <h3 style="margin: 30px 0 20px 0; color: var(--accent-color);">Why This Matters</h3>
                <p class="dialogue-text">${choice.explanation || 'Every choice teaches us something about safety and awareness.'}</p>
                <button class="btn-primary" onclick="game.nextScene()" style="margin-top: 30px;">Continue</button>
            </div>
        `;
    }

    nextScene() {
        this.currentScene++;
        this.showScene();
    }

    showPerspectiveComplete() {
        const nextPerspectiveIndex = this.perspectives.indexOf(this.currentPerspective) + 1;

        if (nextPerspectiveIndex < this.perspectives.length) {
            const nextPerspective = this.perspectives[nextPerspectiveIndex];
            this.showPerspectiveTransition(nextPerspective);
        } else {
            this.showFinalReflection();
        }
    }

    showPerspectiveTransition(nextPerspective) {
        const gameScreen = document.getElementById('game-screen');
        const perspectiveNames = {
            'parent': 'Parent',
            'community': 'Community Member'
        };

        gameScreen.innerHTML = `
            <div class="reflection-screen">
                <h2 style="color: var(--accent-color); margin-bottom: 30px;">Perspective Complete</h2>
                <p class="dialogue-text">
                    You've experienced this scenario from one viewpoint.
                    Now let's see the same situation through different eyes.
                </p>
                <p class="dialogue-text" style="margin-top: 30px;">
                    <strong>Next: ${perspectiveNames[nextPerspective]} Perspective</strong>
                </p>
                <p style="color: var(--text-secondary); margin-top: 20px;">
                    Understanding multiple perspectives helps us see how safety is a shared responsibility.
                </p>
                <button class="btn-primary" onclick="game.startPerspective('${nextPerspective}')" style="margin-top: 40px;">
                    Continue to ${perspectiveNames[nextPerspective]} View
                </button>
            </div>
        `;
    }

    showFinalReflection() {
        const safeChoices = this.choices.filter(c => c.safety === 'safe').length;
        const totalChoices = this.choices.length;
        const percentage = Math.round((safeChoices / totalChoices) * 100);

        const gameScreen = document.getElementById('game-screen');

        let performanceMessage = '';
        if (percentage >= 80) {
            performanceMessage = 'Excellent safety awareness! You demonstrated strong critical thinking across all perspectives.';
        } else if (percentage >= 60) {
            performanceMessage = 'Good job! You showed solid safety awareness with room to grow.';
        } else {
            performanceMessage = 'This scenario taught you valuable lessons. Every experience builds your safety skills.';
        }

        let timelineHTML = this.generateTimeline();

        gameScreen.innerHTML = `
            <div class="reflection-screen">
                <h2 style="color: var(--accent-color); margin-bottom: 20px;">Scenario Complete</h2>
                <h3 style="margin-bottom: 30px;">${this.currentScenario.title}</h3>

                <div class="impact-dashboard">
                    <div class="stat-box">
                        <div class="stat-number">${safeChoices}/${totalChoices}</div>
                        <div class="stat-label">Safe Choices</div>
                    </div>
                    <div class="stat-box">
                        <div class="stat-number">${percentage}%</div>
                        <div class="stat-label">Safety Score</div>
                    </div>
                    <div class="stat-box">
                        <div class="stat-number">3</div>
                        <div class="stat-label">Perspectives</div>
                    </div>
                </div>

                <p class="dialogue-text" style="margin: 40px 0;">${performanceMessage}</p>

                <h3 style="color: var(--accent-color); margin: 40px 0 20px 0;">Your Journey</h3>
                <div class="timeline">
                    ${timelineHTML}
                </div>

                <div class="aria-assistant" style="margin-top: 40px;">
                    <h4 style="color: var(--accent-color); margin-bottom: 15px;">Key Takeaways</h4>
                    <ul style="color: var(--text-primary); line-height: 2; list-style: none; padding-left: 0;">
                        <li>✓ Safety is a shared responsibility across children, parents, and community</li>
                        <li>✓ Different perspectives reveal different warning signs and opportunities</li>
                        <li>✓ Communication and awareness prevent dangerous situations</li>
                        <li>✓ Trust your instincts and know when to ask for help</li>
                    </ul>
                </div>

                <h3 style="color: var(--accent-color); margin: 40px 0 20px 0;">Real Resources</h3>
                <div style="background: rgba(0,0,0,0.3); padding: 25px; border-radius: 15px; margin-bottom: 30px;">
                    <p style="color: var(--text-primary); margin-bottom: 15px;"><strong>If you or someone you know needs help:</strong></p>
                    <ul style="color: var(--text-secondary); line-height: 2;">
                        <li><strong>National Human Trafficking Hotline:</strong> 1-888-373-7888</li>
                        <li><strong>Crisis Text Line:</strong> Text HOME to 741741</li>
                        <li><strong>Childhelp National Child Abuse Hotline:</strong> 1-800-422-4453</li>
                        <li><strong>National Suicide Prevention Lifeline:</strong> 988</li>
                        <li><strong>Project Milk Carton ARIA:</strong> <a href="https://t.me/projectmilkcarton" target="_blank" style="color: var(--accent-color);">Telegram Bot</a></li>
                    </ul>
                </div>

                <div style="background: linear-gradient(135deg, #FFD700, #FFA500); padding: 30px; border-radius: 20px; margin: 30px 0; text-align: center; border: 3px solid #FF8C00; box-shadow: 0 10px 30px rgba(255, 215, 0, 0.5);">
                    <h2 style="color: #333; font-size: 2rem; margin-bottom: 15px;">🎮 YOU EARNED A REWARD!</h2>
                    <p style="color: #333; font-size: 1.2rem; margin-bottom: 25px;">
                        Congratulations! You completed a scenario and learned valuable safety skills.<br>
                        Play a fun game as your reward!
                    </p>
                    <button class="btn-primary" onclick="window.location.href='games/game-launcher.html?age=${this.gameData.ageRange}'"
                            style="padding: 20px 50px; font-size: 1.3rem; background: linear-gradient(135deg, #4CAF50, #8BC34A); animation: pulse 2s infinite;">
                        🏆 CLAIM YOUR REWARD GAME! 🏆
                    </button>
                </div>

                <div style="display: flex; gap: 15px; flex-wrap: wrap; justify-content: center;">
                    <button class="btn-primary" onclick="selectAge('${this.gameData.ageRange}')">
                        Play Another Scenario
                    </button>
                    <button class="btn-secondary" onclick="window.location.href='index.html'">
                        Back to Menu
                    </button>
                    <button class="btn-secondary" onclick="game.shareResults()">
                        Share Progress
                    </button>
                </div>

                <style>
                    @keyframes pulse {
                        0%, 100% { transform: scale(1); }
                        50% { transform: scale(1.05); }
                    }
                </style>
            </div>
        `;

        this.updateProgress();
        document.getElementById('progress-bar').style.width = '100%';
    }

    generateTimeline() {
        const perspectiveIcons = {
            'child': '👤',
            'parent': '👨‍👩‍👧',
            'community': '🏘️'
        };

        let html = '';
        let currentPerspective = '';

        this.choices.forEach((choice, index) => {
            if (choice.perspective !== currentPerspective) {
                currentPerspective = choice.perspective;
                html += `<div style="margin-top: 20px; color: var(--accent-color); font-weight: bold;">
                    ${perspectiveIcons[choice.perspective]} ${choice.perspective.toUpperCase()} PERSPECTIVE
                </div>`;
            }

            const safetyEmoji = {
                'safe': '✅',
                'moderate': '⚠️',
                'risky': '⚠️',
                'unsafe': '❌'
            };

            html += `
                <div class="timeline-item">
                    <span style="color: var(--text-secondary);">Choice ${index + 1}:</span> ${choice.choice}
                    <span style="margin-left: 10px;">${safetyEmoji[choice.safety]}</span>
                </div>
            `;
        });

        return html;
    }

    shareResults() {
        const safeChoices = this.choices.filter(c => c.safety === 'safe').length;
        const totalChoices = this.choices.length;
        const percentage = Math.round((safeChoices / totalChoices) * 100);

        const shareText = `I just completed "${this.currentScenario.title}" on ECHO by Project Milk Carton!\n\nSafety Score: ${percentage}%\nSafe Choices: ${safeChoices}/${totalChoices}\n\nLearning safety through interactive experiences. Check it out at projectmilkcarton.org`;

        if (navigator.share) {
            navigator.share({
                title: 'ECHO Game Results',
                text: shareText
            }).catch(err => console.log('Share failed', err));
        } else {
            navigator.clipboard.writeText(shareText).then(() => {
                alert('Results copied to clipboard! Share with your friends.');
            });
        }
    }

    showError(message) {
        document.getElementById('game-screen').innerHTML = `
            <div style="text-align: center; padding: 60px 20px;">
                <h2 style="color: var(--danger); margin-bottom: 20px;">Error</h2>
                <p style="color: var(--text-secondary);">${message}</p>
                <button class="btn-primary" onclick="window.location.href='index.html'" style="margin-top: 30px;">
                    Return to Menu
                </button>
            </div>
        `;
    }
}

// Initialize game engine
const game = new GameEngine();

// Function to exit to menu
function exitToMenu() {
    if (confirm('Are you sure you want to exit? Your progress will be lost.')) {
        window.location.href = 'index.html';
    }
}

// Load game on page load
window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const ageRange = urlParams.get('age');
    const scenarioId = urlParams.get('scenario');

    if (ageRange && scenarioId) {
        game.init(ageRange, scenarioId);
    } else {
        game.showError('Missing game parameters. Please select a scenario from the menu.');
    }
});
