//constructor(id, nivel, tipo, status, nombres, apellidos, sexo, nace, muere, detalle, url)
const integrantes = [
new Familiar('52', 1, 'f', 'c', 'Odila María', 'Chirivella Varela', 'f', '30-abril', 'm', false, '-'),
new Familiar('52a', 1, 'p', 'c', 'Abelardo Lorenzo', 'Valentíner', 'm', '', 'm', false, '-'),

new Familiar('521', 2, 'f', 'c', 'Antonio Jesús', 'Valentíner Chirivella', 'm', '25-agosto', 'v', true, '-'),
new Familiar('521a', 2, 'p', 'c', 'María Alicia', 'Jareño', 'f', '', 'v', false, '-'),
new Familiar('5211', 3, 'f', 'c', 'Antonio José', 'Valentíner Jareño', 'm', '23-octubre', 'v', false, '-'),
new Familiar('5211a', 3, 'p', 'c', 'Ana', 'Iniesta', 'f', '', 'v', false, '-'),
new Familiar('5212', 3, 'f', 'c', 'Jorge Alejandro', 'Valentíner Jareño', 'm', '', 'v', false, '-'),
new Familiar('5212a', 3, 'p', 'c', 'Noelia', 'Domínguez', 'f', '', 'v', false, '-'),

new Familiar('522', 2, 'f', 'd', 'Odila Amelia', 'Valentíner Chirivella', 'f', '20-octubre', '23-agosto', true, '-'),
new Familiar('522a', 2, 'p', 'd', 'Robinson', 'Vásquez', 'm', '', '', false, '-'),
new Familiar('5221', 3, 'f', 'c', 'Alejandro José', 'Vásquez Valentíner', 'm', '4-enero', 'v', false, '-'),
new Familiar('5222', 3, 'f', 's', 'José Robinson', 'Vásquez Valentíner', 'm', '', 'v', false, '-'),
new Familiar('5223', 3, 'f', 's', 'Ileana Renée', 'Vásquez Valentíner', 'f', '15-mayo', 'v', false, '-'),
new Familiar('5223a', 3, 'p', 'c', 'Alexis', 'Pacheco', 'm', '', 'v', false, '-'),
new Familiar('52231', 4, 'f', 's', 'Susana', 'Pacheco Vásquez', 'f', '', 'v', false, '-'),
new Familiar('52232', 4, 'f', 's', 'Samuel', 'Pacheco Vásquez', 'm', '', 'v', false, '-'),

new Familiar('523', 2, 'f', 'c', 'Tulio Eugenio', 'Valentíner Chirivella', 'm', '14-noviembre', 'v', true, '-'),
new Familiar('5231', 3, 'f', 's', 'Angie', 'Valentíner', 'f', '', 'v', false, '-'),
new Familiar('523a', 2, 'p', 'c', 'Sandra', 'Márquez', 'f', '', 'v', false, '-'),
new Familiar('5232', 3, 'f', 'c', 'Daniel', 'Valentíner Márquez', 'm', '', 'v', false, '-'),
new Familiar('5232a', 3, 'p', 'c', 'Esposa', '-', 'f', '', 'v', false, '-'),
new Familiar('5233', 3, 'f', 's', 'Irene', 'Valentíner Márquez', 'f', '', 'v', false, '-'),

new Familiar('524', 2, 'f', 'c', 'Abelardo Rafael', 'Valentíner Chirivella', 'm', '30-septiembre', 'v', true, '-'),
new Familiar('524a', 2, 'p', 'c', 'Ana Rita', 'Rodríguez Chirivella', 'f', '16-septiembre', 'v', false, '-'),
new Familiar('5241', 3, 'f', 'r', 'Abelardo Antonio', 'Valentíner Rodríguez', 'm', '', 'v', false, '-'),
new Familiar('5241a', 3, 'p', 'r', 'Mariángeles', 'López', 'f', '', 'v', false, '-'),

new Familiar('525', 2, 'f', 'd', 'Rolando Jesús', 'Valentíner Chirivella', 'm', '05-noviembre', 'v', true, '-'),
new Familiar('525a', 2, 'p', 'd', 'Gloria', 'Williams', 'f', '', '', false, '-'),
new Familiar('5251', 3, 'f', 's', 'Maurice', 'Valentíner Williams', 'm', '', 'v', false, '-'),

new Familiar('526', 2, 'f', 'c', 'Manuel Lorenzo', 'Valentíner Chirivella', 'm', '06-febrero', 'v', true, '-'),
new Familiar('526a', 2, 'p', 'd', 'Francis Yanet', 'Chen', 'f', '', 'v', false, '-'),
new Familiar('5261', 3, 'f', 'c', 'Mayalin', 'Valentíner Chen', 'f', '', 'v', false, '-'),
new Familiar('5261a', 3, 'p', 'c', 'Johnder', 'Perozo', 'm', '', '', false, '-'),
new Familiar('52611', 4, 'f', 's', 'Jhoylin Cristina', 'Perozo Valentíner', 'f', '', 'v', false, '-'),
new Familiar('52612', 4, 'f', 's', 'Hendrix', 'Perozo Valentíner', 'm', '', 'v', false, '-'),
new Familiar('5262', 3, 'f', 'c', 'Manuel Lung', 'Valentíner Chen', 'm', '', 'v', false, '-'),
new Familiar('5262a', 3, 'p', 'c', 'Esposa', 'Lung', 'f', '', '', false, '-'),
new Familiar('52621', 4, 'f', 's', 'Brianna', 'Valentíner', 'f', '', 'v', false, '-'),
new Familiar('52622', 4, 'f', 's', 'Bebé', 'Valentíner', 'm', '', 'v', false, '-'),
new Familiar('5263', 3, 'f', 'c', 'Manuel Antonio', 'Valentíner Chen', 'm', '', 'v', false, '-'),
new Familiar('5263a', 3, 'p', 'c', 'Esmeralda', 'Bolívar', 'f', '', 'v', false, '-'),
new Familiar('52631', 4, 'f', 's', 'Arcangel', 'Valentíner Bolívar', 'm', '', 'v', false, '-'),
new Familiar('52632', 4, 'f', 's', 'Beba', 'Valentíner Bolívar', 'f', '', 'v', false, '-'),
new Familiar('526b', 2, 'p', 'c', 'Katherine', 'Peña', 'f', '21-diciembre', '', false, '-'),
new Familiar('5264', 3, 'f', 's', 'Manuel Salomón', 'Valentíner Peña', 'm', '', 'v', false, '-'),
new Familiar('5265', 3, 'f', 's', 'Manuel David', 'Valentíner Peña', 'm', '', 'v', false, '-'),

new Familiar('527', 2, 'f', 'c', 'Jorge Salvador', 'Valentíner Chirivella', 'm', '23-abril', 'v', true, '-'),
new Familiar('527a', 2, 'p', 'c', 'Sofía', 'Márquez', 'f', '', 'v', false, '-'),

new Familiar('528', 2, 'f', 'c', 'Ivonne Judith', 'Valentíner Chirivella', 'f', '08-octubre', 'v', true, '-'),
new Familiar('528a', 2, 'p', 'c', 'Ingo', 'Graf', 'm', '', 'v', false, '-'),
new Familiar('5281', 3, 'f', 's', 'Isabel', 'Graf Valentíner', 'f', '', 'v', false, '-'),
new Familiar('5282', 3, 'f', 's', 'Ileana', 'Graf Valentíner', 'f', '', 'v', false, '-'),

new Familiar('529', 2, 'f', 's', 'Mery Flor', 'Valentíner Chirivella', 'f', '15-septiembre', 'v', false, '-'),
new Familiar('520', 2, 'f', 's', 'Duilio Simón', 'Valentíner Chirivella', 'm', '29-noviembre', 'v', false, '-'),
]