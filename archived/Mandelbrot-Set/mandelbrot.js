var renderArea = document.getElementById('renderArea1');
var ctx = renderArea.getContext("2d");

function drawPixel(x, y, col) {
    ctx.fillStyle = col;
    ctx.fillRect(x, y, 1, 1);
}

function saveCanvas() {
    var img = renderArea.toDataURL("image/png").replace("image/png", "image/octet-stream");
    window.location.href = img;
}

// Image size
var ImageWidth = 1600;
var ImageHeight = 800;

// Number of iterations to run
var iterations = 140;

// shift image
//var offsetX = 2;
//var offsetY = 1.2;
var offsetX = 1.2;
var offsetY = 0.4;

// Resolution
//var resolution = 320;
var resolution = 3072;
var resolutionX = resolution;
var resolutionY = resolution;

function mandelbrot(cr, ci) {
    var mReal = cr;
    var mImag = ci;

    for(var n=0; n<iterations; n++)
    {
        // Calculate z = (z * z) + c
        // Real component
        var zr = (mReal * mReal) - (mImag * mImag) + cr;
        // Imaginary component
        var zi = 2 * (mReal * mImag) + ci

        mReal = zr;
        mImag = zi;

        if(mReal * mImag > 5)
        {
            return (n * 100.0) / iterations;
        }
    }

    return 0;
}

for(var x = 0; x < ImageWidth; x++) {
    for(var y = 0; y < ImageHeight; y++) {
        var cr = (x / resolutionX) - offsetX;
        var ci = (y / resolutionY) - offsetY;

        var result = mandelbrot(cr, ci);
        var imgColor = '#000000';
        if((result > 0) && (result <= 0.2 * iterations))
        {
            imgColor = 'hsl(200, 100%, ' + result + '%)';
        }
        else if((result > 0.2) && (result <= 0.6 * iterations))
        {
            imgColor = 'hsl(80, 100%, ' + result + '%)';
        }
        else if((result > 0.6) && (result <= 0.8 * iterations))
        {
            imgColor = 'hsl(60, 100%, ' + result + '%)';
        }
        else if(result > 0.8)
        {
            imgColor = 'hsl(20, 100%, ' + result + '%)';
        }

        drawPixel(x, y, imgColor);
    }
}