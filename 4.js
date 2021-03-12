if (province == 'ONTARIO') {
   calc = 2 * basis(base * ONTARIO_RATE) + extra(base * ONTARIO_RATE) * 1.05;
} else if ((province == 'QUEBEC') || (province == 'ALBERTA')) {
   rate = (province == 'QUEBEC') ? QUEBEC_RATE : ALBERTA_RATE;
   calc = 2 * basis(base * rate) + extra(base * rate) * 1.05;
   if (province == 'QUEBEC') {
       points = 2;
   }
} else {
   calc = 2 * basis(base) + extra(base) * 1.05;
}
