function calcularVentas() {
    // Función auxiliar para verificar si el valor es numérico
    function esNumero(valor) {
        return !isNaN(parseFloat(valor)) && isFinite(valor);
    }

    // Precios de productos
    const precios = {
        aqua: 200,
        emocion: 180,
        alegria: 160,
        frescura: 150
    };

    // Valida las entradas y calcula las ventas para un vendedor
    function calcularTotalVentas(ventas) {
        return Object.keys(ventas).reduce((total, producto) => {
            const cantidad = ventas[producto];
            if (!esNumero(cantidad)) {
                console.error(`Por favor, ingrese un valor numérico para ${producto}.`);
                return total;
            }
            return total + cantidad * precios[producto];
        }, 0);
    }

    // Obtener las cantidades vendidas por Juana
    const ventasJuana = {
        aqua: parseFloat(document.getElementById('aquaJuana').value) || 0,
        emocion: parseFloat(document.getElementById('emocionJuana').value) || 0,
        alegria: parseFloat(document.getElementById('alegriaJuana').value) || 0,
        frescura: parseFloat(document.getElementById('frescuraJuana').value) || 0
    };

    // Obtener las cantidades vendidas por Pedro
    const ventasPedro = {
        aqua: parseFloat(document.getElementById('aquaPedro').value) || 0,
        emocion: parseFloat(document.getElementById('emocionPedro').value) || 0,
        alegria: parseFloat(document.getElementById('alegriaPedro').value) || 0,
        frescura: parseFloat(document.getElementById('frescuraPedro').value) || 0
    };

    // Calcular ventas totales
    const totalJuana = calcularTotalVentas(ventasJuana);
    const totalPedro = calcularTotalVentas(ventasPedro);

    // Mostrar resultados
    console.log(`Juana vendió un total de: $${totalJuana}`);
    console.log(`Pedro vendió un total de: $${totalPedro}`);

    // Determinar el empleado del mes
    if (totalJuana > totalPedro) {
        console.log('El empleado del mes es Juana.');
    } else if (totalPedro > totalJuana) {
        console.log('El empleado del mes es Pedro.');
    } else if (totalJuana === totalPedro && totalJuana !== 0) {
        console.log('Es un empate.');
    } else {
        console.log('No se han registrado ventas.');
    }
}
