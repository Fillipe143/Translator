const { app, BrowserWindow } = require("electron");

function createWindow() {
  // Criar uma janela de navegação.
  let win = new BrowserWindow({ width: 730, height: 500, fullscreen: false });

  // Carrega o index.html do app.
  win.loadFile(__dirname + "/index.html");
  // Remove o menu principal
  win.setMenu(null);

  // Escutamos para quando a janela for fechada
  win.on("closed", function() {
    // Remove a referência que criamos no começo do arquivo
    win = null;
  });
}

// Este método será chamado quando o Electron tiver finalizado
// a inicialização e está pronto para criar a janela browser.
// Algumas APIs podem ser usadas somente depois que este evento ocorre.
app.on("ready", createWindow);