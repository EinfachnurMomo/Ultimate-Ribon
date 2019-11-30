/* jshint esversion: 9 */
// Funktion zum selektieren von Items
const selectElement = (s) => document.querySelector(s);

// Öffnet das Menü beim klicken
selectElement('.open').addEventListener('click', () => {
    selectElement('.nav-list').classList.add('active');
});

// Schließt das Menü beim klicken
selectElement('.close').addEventListener('click', () => {
    selectElement('.nav-list').classList.remove('active');
});