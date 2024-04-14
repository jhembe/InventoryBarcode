    // import { initializeApp } from "firebase/app";

    import {initializeApp} from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
    // import { getAnalytics } from "firebase/analytics";

    const firebaseConfig = {
        apiKey: "AIzaSyBck4oIFAU6ynyq-rGO4hTEk60KIzcnS6k",
        authDomain: "inventtest-f47d9.firebaseapp.com",
        projectId: "inventtest-f47d9",
        storageBucket: "inventtest-f47d9.appspot.com",
        messagingSenderId: "175503530578",
        appId: "1:175503530578:web:5a3697688bdae2d6d15d8b",
        measurementId: "G-0FD3P43CCF"
    };

    // Initialize Firebase

    // const app = initializeApp(firebaseConfig);

    // const analytics = getAnalytics(app);

    firebase.initializeApp(firebaseConfig);

    // const firestore = firebase.firestore();
    // const barcodesCollection = firestore.collection("barcodes");

    // document.querySelector('#generateBtn').addEventListener('click',generateBarcode);

    // function generateBarcode() {
    //     var productType = $("#productType").val();
    //     var quantity = parseInt($("#quantity").val());
    //     var barcodeContainer = $("#barcodeContainer");

    //     barcodeContainer.empty(); // Clear previous barcodes

    //     for (var i = 0; i < quantity; i++) {
    //         var barcodeDiv = $("<div></div>");
    //         var barcodeValue = generateBarcodeValue(productType, i + 1); // Generate barcode value
    //         JsBarcode(barcodeDiv[0], barcodeValue, {
    //             format: "CODE128",
    //             displayValue: true,
    //             fontSize: 20
    //         });
    //         barcodeContainer.append(barcodeDiv);
    //         // Store barcode data in Firestore
    //         storeBarcodeInFirestore(productType, barcodeValue, quantity);
    //     }

    //     $("#downloadButton").show();
    // }

    // function generateBarcodeValue(productType, index) {
    //     // Generate barcode value using product type abbreviation and index
    //     return productType.substring(0, 2).toUpperCase() + index.toString().padStart(6, '0');
    // }

    // function storeBarcodeInFirestore(productType, barcodeValue, quantity) {
    //     // Store barcode data in Firestore
    //     barcodesCollection.add({
    //         productType: productType,
    //         barcode: barcodeValue,
    //         unit: quantity // Store the quantity for the product
    //     })
    //     .then((docRef) => {
    //         console.log("Barcode data stored in Firestore with ID: ", docRef.id);
    //     })
    //     .catch((error) => {
    //         console.error("Error storing barcode data in Firestore: ", error);
    //     });
    // }

    // function downloadBarcodes() {
    //     var container = $("#barcodeContainer");
    //     var barcodes = container.find("svg");

    //     var zip = new JSZip();
    //     for (var i = 0; i < barcodes.length; i++) {
    //         var svg = barcodes[i].outerHTML;
    //         zip.file("barcode_" + i + ".svg", svg);
    //     }

    //     zip.generateAsync({ type: "blob" })
    //         .then(function (content) {
    //             saveAs(content, "barcodes.zip");
    //         });
    // }
