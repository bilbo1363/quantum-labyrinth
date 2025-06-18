import Phaser from 'phaser';
import BootScene from './scenes/BootScene';
import MenuScene from './scenes/MenuScene';
import GameScene from './scenes/GameScene';
import UIScene from './scenes/UIScene';
import GameConfig from './config/GameConfig';

// Создание экземпляра игры Phaser
const config = {
  type: Phaser.AUTO,
  width: GameConfig.GAME_WIDTH,
  height: GameConfig.GAME_HEIGHT,
  backgroundColor: '#000000',
  parent: 'game-container',
  pixelArt: true,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: GameConfig.DEBUG_MODE
    }
  },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  scene: [BootScene, MenuScene, GameScene, UIScene]
};

// Скрываем сообщение о загрузке после инициализации игры
window.onload = function() {
  const loading = document.getElementById('loading');
  if (loading) {
    loading.style.display = 'none';
  }
};

// Инициализация игры
const game = new Phaser.Game(config);

// Экспортируем экземпляр игры в глобальную область видимости (для отладки)
window.game = game;