   const PI = 3.14159265;

        function areaCirculo() {
            const r = parseFloat(document.getElementById('raio1').value);
            const area = PI * r * r;
            document.getElementById('res1').innerText = `Área: ${area.toFixed(2)}`;
        }

        function salarioLiquido() {
            const vh = parseFloat(document.getElementById('horaAula').value);
            const h = parseFloat(document.getElementById('horasMes').value);
            const inss = parseFloat(document.getElementById('inss').value);
            const bruto = vh * h;
            const liquido = bruto - (inss / 100) * bruto;
            document.getElementById('res2').innerText = `Salário Líquido: R$ ${liquido.toFixed(2)}`;
        }

        function acrescimoDesconto() {
            const v1 = parseFloat(document.getElementById('val1').value);
            const v2 = parseFloat(document.getElementById('val2').value);
            document.getElementById('res3').innerText = 
                `Valor 1 com +30%: ${ (v1 * 1.3).toFixed(2) }, Valor 2 com -25%: ${(v2 * 0.75).toFixed(2)}`;
        }

        function mediaPonderada() {
            const n1 = parseFloat(document.getElementById('n1').value);
            const n2 = parseFloat(document.getElementById('n2').value);
            const n3 = parseFloat(document.getElementById('n3').value);
            const n4 = parseFloat(document.getElementById('n4').value);
            const mp = (n1*1 + n2*2 + n3*3 + n4*4) / 10;
            document.getElementById('res4').innerText = `Média Ponderada: ${mp.toFixed(2)}`;
        }

        function volumeLata() {
            const r = parseFloat(document.getElementById('raio5').value);
            const h = parseFloat(document.getElementById('altura5').value);
            const v = PI * r * r * h;
            document.getElementById('res5').innerText = `Volume: ${v.toFixed(2)}`;
        }

        function trocarValores() {
            let a = document.getElementById('a6').value;
            let b = document.getElementById('b6').value;
            [a, b] = [b, a];
            document.getElementById('res6').innerText = `Após troca: A = ${a}, B = ${b}`;
        }

        function calcularHipotenusa() {
            const c1 = parseFloat(document.getElementById('cat1').value);
            const c2 = parseFloat(document.getElementById('cat2').value);
            const h = Math.sqrt(c1 * c1 + c2 * c2);
            document.getElementById('res7').innerText = `Hipotenusa: ${h.toFixed(2)}`;
        }

        function calcularRetangulo() {
            const b = parseFloat(document.getElementById('base8').value);
            const h = parseFloat(document.getElementById('altura8').value);
            const p = 2 * (b + h);
            const a = b * h;
            const d = Math.sqrt(b * b + h * h);
            document.getElementById('res8').innerText = `Perímetro: ${p.toFixed(2)}, Área: ${a.toFixed(2)}, Diagonal: ${d.toFixed(2)}`;
        }

        function decimoTermoPA() {
            const a1 = parseFloat(document.getElementById('pa1').value);
            const r = parseFloat(document.getElementById('razaoPa').value);
            const a10 = a1 + 9 * r;
            document.getElementById('res9').innerText = `10º termo: ${a10}`;
        }

        function quintoTermoPG() {
            const a1 = parseFloat(document.getElementById('pg1').value);
            const r = parseFloat(document.getElementById('razaoPg').value);
            const a5 = a1 * Math.pow(r, 4);
            document.getElementById('res10').innerText = `5º termo: ${a5}`;
        }