//constructor(id, nivel, tipo, status, nombres, apellidos, sexo, nace, muere, detalle, url, foto)
const integrantes = [
new Familiar('56', 1, 'f', 's', 'Aura Virginia', 'Chirivella Varela', 'f', '06-julio', '14-abril', false, '-', true),
new Familiar('56a', 2, 'f', 'v', '-', 'Fagúndez', 'm', '', '', true, '-', true),

new Familiar('561', 2, 'f', 'v', 'Yolanda Nelly', 'Chirivella', 'f', '29-noviembre', 'v', true, '-', true),
new Familiar('5611', 3, 'f', 'c', 'José Magno', 'Carreño Chirivella', 'm', '23-octubre', 'v', false, '-', true),
new Familiar('5611a', 3, 'p', 'd', 'Valentina', 'Soler', 'f', '07-junio', 'v', false, '-', true),
new Familiar('56111', 4, 'f', 's', 'Amir Israel', 'Carreño Soler', 'm', '16-enero', 'v', false, '-', true),
new Familiar('5611b', 3, 'p', 'c', 'Loren', 'Lucena', 'f', '20-marzo', 'v', false, '-', true),

new Familiar('562', 2, 'f', 'd', 'Manuel Antonio', 'Chirivella', 'm', '26-octubre', 'v', true, '+573002132196', true),
new Familiar('562a', 2, 'p', 'd', 'Maylin', 'Finol', 'f', '05-junio', 'v', false, '+573127160374', true),
new Familiar('5621', 3, 'f', 's', 'Soxyelis Nailith', 'Chirivella Finol', 'f', '15-abril', 'v', false, '+573003938375', true),
new Familiar('5622', 3, 'f', 'c', 'Aura Isabel', 'Chirivella Finol', 'f', '04-mayo', 'v', false, '+5730122911560', true),
new Familiar('5622a', 3, 'p', 'c', 'Jeison', 'Hernández', 'm', '05-junio', 'v', false, '+573007862539', true),
new Familiar('56221', 4, 'f', 's', 'Liam David', 'Hernández Chirivella', 'm', '15-marzo', 'v', false, '-', true),
new Familiar('56222', 4, 'f', 's', 'Scarlett Isabel', 'Hernández Chirivella', 'f', '30-octubre', 'v', false, '-', true),
new Familiar('5623', 3, 'f', 's', 'Ana Paola', 'Chirivella Finol', 'f', '25-diciembre', 'v', false, '+573046369890', true),
new Familiar('5624', 3, 'f', 's', 'Aylin de Jesús', 'Chirivella Finol', 'f', '10-junio', 'v', false, '+573044070455', true),

new Familiar('563', 2, 'f', 'c', 'Olga Milagros', 'Chirivella', 'f', '23-abril', 'v', true, '-', true),
new Familiar('563a', 2, 'p', 'c', 'Félix Yoel', 'Ramírez', 'm', '12-julio', 'v', false, '-', true),
new Familiar('5631', 3, 'f', 'c', 'Kervis Gabriel', 'Ramirez Chirivella', 'm', '03-febrero', '', false, '-', true),
new Familiar('5631a', 3, 'p', 'c', 'Owaglis', 'Peña', 'f', '17-septiembre', 'v', false, '-', true),
new Familiar('56311', 4, 'f', 'c', 'Marianyi Alexaida', 'Jaime Araujo (*, true)', 'f', '19-julio', 'v', false, '-', true),
new Familiar('563111', 5, 'f', 's', 'Aaron Gael', 'Sivira Jaime', 'm', '23-noviembre', 'v', false, '-', true),
new Familiar('56312', 4, 'f', 's', 'Gabriela de los Ángeles', 'Ramírez Peña', 'f', '16-mayo', 'v', false, '-', true),
new Familiar('5632', 3, 'f', 'c', 'Yakari del Valle', 'Ramirez Chirivella', 'f', '27-marzo', 'v', false, '-', true),
new Familiar('5632a', 3, 'p', 'c', 'Ferney', 'López', 'm', '30-marzo', '', false, '-', true),
new Familiar('56321', 4, 'f', 's', 'Miguel Alejandro', 'Alzate Ramirez', 'm', '18-enero', 'v', false, '-', true),
new Familiar('56322', 4, 'f', 's', 'Mathias de Jesús', 'López Ramírez', 'm', '19-agosto', 'v', false, '-', true),
new Familiar('56323', 4, 'f', 's', 'Mariana del Carmen', 'López Ramírez', 'f', '19-agosto', 'v', false, '-', true),
new Familiar('5633', 3, 'f', 's', 'Benjamín Josué', 'Ramírez Chirivella', 'm', '28-octubre', 'v', false, '-', true),

new Familiar('564', 2, 'f', 's', 'José Miguel', 'Chirivella', 'm', '06-junio', '03-julio', false, '-', true),

new Familiar('565', 2, 'f', 'd', 'Carlos Raúl', 'Chirivella', 'm', '17-octubre', '18-noviembre', true, '-', true),
new Familiar('565a', 2, 'p', 'd', 'Norbelyz', 'Suárez', 'f', '16-junio', 'v', false, '-', true),
new Familiar('5651', 3, 'f', 'c', 'Anny Virginia de Jesús', 'Chirivella Suárez', 'f', '26-agosto', 'v', false, '-', true),
new Familiar('5651a', 3, 'p', 'c', 'Yixon Daniel', 'Cuicas García', 'm', '02-marzo', 'v', false, '-', true),
new Familiar('56511', 4, 'f', 's', 'Emma Anthonella', 'Cuicas Chirivella', 'm', '26-septiembre', 'v', false, '-', true),
new Familiar('5652', 3, 'f', 's', 'Freddy Raúl', 'Chirivella Suárez', 'm', '07-septiembre', 'v', false, '-', true),

new Familiar('566', 2, 'f', 's', 'Luis José', 'Fagúndez Chirivella', 'm', '18-octubre', '22-junio', false, '-', true),
]
