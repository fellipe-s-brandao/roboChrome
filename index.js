const puppeteer = require('puppeteer');
var readlineSync = require('readline-sync');

console.log('BOT conversor de moedas 💰🤖');

async function robo(){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    const moedaBase = readlineSync.question('Infome uma moeda base: ');
    const moedaFinal = readlineSync.question('Infome uma moeda desejada: ');
    
    const baseUrl = `https://www.google.com/search?q=${moedaBase}+para+${moedaFinal}&oq=${moedaBase}+para+${moedaFinal}&aqs=chrome..69i57j0i512l9.2607j1j4&sourceid=chrome&ie=UTF-8`;
    await page.goto(baseUrl);
  
    const resultado = await page.evaluate(() => {
        return document.querySelector('.a61j6.vk_gy.vk_sh.Hg3mWc').value;
    });

    console.log(`O valor de 1 em ${moedaBase} é ${resultado} ${moedaFinal}`);

    await browser.close();
};

robo();