function calcular() {

    var archiveSizeElement = document.getElementById('archiveSize');
    var archiveSizeValue = parseInt(archiveSizeElement.value);
    //window.alert(archiveSizeValue);

    var speedDownloadElement = document.getElementById('netSpeed');
    var speedDownloadValue = parseInt(speedDownloadElement.value);
    //window.alert(speedDownloadValue);

    var archiveSize = document.getElementById('sizes');
    var archiveSizeText = archiveSize.options[archiveSize.selectedIndex].text;  

    var netSpeed = document.getElementById('speed');
    var netSpeedText = netSpeed.options[netSpeed.selectedIndex].text;

    var timer = document.getElementById('title-time');

    if (archiveSizeText == 'Byte') {
        //window.alert(archiveSizeText);
        var toMegabyte =  parseFloat(archiveSizeValue / (1 * Math.pow(10, 6)));
    }

    if (archiveSizeText == 'Kilobyte') {
        //window.alert(archiveSizeText);
        var toMegabyte = parseFloat(archiveSizeValue / 1000);
    }
    
    if (archiveSizeText == 'Megabyte') {
        //window.alert(archiveSizeText);
        var toMegabyte = archiveSizeValue;
    }

    if (archiveSizeText == 'Gigabyte') {
        //window.alert(archiveSizeText);
        var toMegabyte = (archiveSizeValue * 1000);
    }

    //---------------------------------------------//


    if (netSpeedText == 'Kbps') {
        //window.alert('kbps')
        var toMbps = parseFloat(speedDownloadValue / 1000);
        //window.alert(toMbps)

        var timeDonwload = parseInt(toMegabyte / (toMbps / 8));
        //window.alert(toMegabyte);
        //window.alert(timeDonwload);

        if (timeDonwload <= 0) {
            timer.innerHTML = `Tempo: Menos de 1 segundo`;
        }

        else if (timeDonwload >= 4152000) {
            timer.innerHTML = `Tempo: Mais de 1 mes`;
        }

        
        ////window.alert(`Tempo: ${timeDonwloadConvertHr}:${timeDonwloadConvertMin}:${timeDonwloadConvertSegs}`)

        else {

            var timeDonwloadConvertSegs = parseInt(timeDonwload % 60);
            parseInt(timeDonwload /= 60);
            var timeDonwloadConvertMin = parseInt(timeDonwload % 60);
            parseInt(timeDonwload /= 60);
            var timeDonwloadConvertHr = parseInt(timeDonwload % 24);
            parseInt(timeDonwload /= 24)
            var timeDonwloadDays = parseInt(timeDonwload % 24);
            //window.alert(timeDonwloadDays)


            timer.innerHTML = `Tempo: ${timeDonwloadDays}:${timeDonwloadConvertHr}:${timeDonwloadConvertMin}:${timeDonwloadConvertSegs}`;
        }

    }

    if (netSpeedText == 'KBps') {
        //window.alert('KBps');
        var toMbps = parseFloat(speedDownloadValue / 125);
        //window.alert(toMbps)

        var timeDonwload = parseInt(toMegabyte / (toMbps / 8));
        //window.alert(toMegabyte);
        //window.alert(timeDonwload);

        if (timeDonwload <= 0) {
            timer.innerHTML = `Tempo: Menos de 1 segundo`;
        }

        else if (timeDonwload >= 4152000) {
            timer.innerHTML = `Tempo: Mais de 1 mes`;
        }

        
        ////window.alert(`Tempo: ${timeDonwloadConvertHr}:${timeDonwloadConvertMin}:${timeDonwloadConvertSegs}`)

        else {

            var timeDonwloadConvertSegs = parseInt(timeDonwload % 60);
            parseInt(timeDonwload /= 60);
            var timeDonwloadConvertMin = parseInt(timeDonwload % 60);
            parseInt(timeDonwload /= 60);
            var timeDonwloadConvertHr = parseInt(timeDonwload % 24);
            parseInt(timeDonwload /= 24)
            var timeDonwloadDays = parseInt(timeDonwload % 24);
            //window.alert(timeDonwloadDays)


            timer.innerHTML = `Tempo: ${timeDonwloadDays}:${timeDonwloadConvertHr}:${timeDonwloadConvertMin}:${timeDonwloadConvertSegs}`;
        }

    }

    if (netSpeedText == 'Mbps') {
        //window.alert(speedDownloadValue);
        var timeDonwload = parseInt(toMegabyte / (speedDownloadValue / 8));
        //window.alert(toMegabyte);
        //window.alert(timeDonwload);

        if (timeDonwload <= 0) {
            timer.innerHTML = `Tempo: Menos de 1 segundo`;
        }

        else if (timeDonwload >= 4152000) {
            timer.innerHTML = `Tempo: Mais de 1 mes`;
        }

        
        ////window.alert(`Tempo: ${timeDonwloadConvertHr}:${timeDonwloadConvertMin}:${timeDonwloadConvertSegs}`)

        else {

            var timeDonwloadConvertSegs = parseInt(timeDonwload % 60);
            parseInt(timeDonwload /= 60);
            var timeDonwloadConvertMin = parseInt(timeDonwload % 60);
            parseInt(timeDonwload /= 60);
            var timeDonwloadConvertHr = parseInt(timeDonwload % 24);
            parseInt(timeDonwload /= 24)
            var timeDonwloadDays = parseInt(timeDonwload % 24);
            //window.alert(timeDonwloadDays)


            timer.innerHTML = `Tempo: ${timeDonwloadDays}:${timeDonwloadConvertHr}:${timeDonwloadConvertMin}:${timeDonwloadConvertSegs}`;
        }

        
    }
}