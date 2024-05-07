
import jsPDF from "jspdf";
import DomToImage from "dom-to-image";



export default function genPDF() {
    let scale = 2;
    let node = document.getElementById("preview-page");

    const options = {
    width: node.clientWidth * scale,
    height: node.clientHeight * scale,
    style: {
    transform: 'scale('+scale+')',
    transformOrigin: 'top left'
    }
    }
    
    DomToImage.toPng(node, options)
    .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        var doc = new jsPDF();
        doc.addImage(img.src, 'PNG', 0, 0, 210, 297)
        doc.save('myCV.pdf');
    })
    .catch(function (error) {
        console.error('oops, something went wrong!', error);
    });

  
  }