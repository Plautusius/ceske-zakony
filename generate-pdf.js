const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

// Load laws data
const lawsData = require('./data/laws-data.js');

// Ensure output directory exists
const outputDir = path.join(__dirname, 'zakony-pdf');
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Function to generate PDF for a law
function generateLawPdf(law) {
    return new Promise((resolve, reject) => {
        const doc = new PDFDocument({
            size: 'A4',
            margins: { top: 60, bottom: 60, left: 60, right: 60 }
        });

        const filename = `${law.id}.pdf`;
        const filepath = path.join(outputDir, filename);
        const writeStream = fs.createWriteStream(filepath);

        doc.pipe(writeStream);

        // Register font for Czech characters
        doc.registerFont('Arial', 'C:\\Windows\\Fonts\\arial.ttf');
        doc.font('Arial');

        // Header
        doc.fontSize(10)
           .fillColor('#666666')
           .text('SBÍRKA ZÁKONŮ ČESKÉ REPUBLIKY', { align: 'center' });

        doc.moveDown(0.5);

        doc.fontSize(12)
           .fillColor('#333333')
           .text(`Zákon č. ${law.number} Sb.`, { align: 'center' });

        doc.moveDown(0.5);

        // Horizontal line
        doc.strokeColor('#cccccc')
           .lineWidth(1)
           .moveTo(60, doc.y)
           .lineTo(535, doc.y)
           .stroke();

        doc.moveDown(1);

        // Title
        doc.fontSize(16)
           .fillColor('#000000')
           .text(law.title, { align: 'center' });

        doc.moveDown(0.5);

        if (law.fullTitle && law.fullTitle !== law.title) {
            doc.fontSize(11)
               .fillColor('#444444')
               .text(law.fullTitle, { align: 'center' });
        }

        doc.moveDown(1);

        // Metadata box
        doc.fontSize(10)
           .fillColor('#666666');

        doc.text(`Datum vyhlášení: ${formatDate(law.published)}`);
        doc.text(`Datum účinnosti: ${formatDate(law.effective)}`);
        doc.text(`Kategorie: ${lawsData.categories[law.category] || law.category}`);

        doc.moveDown(1);

        // Description
        if (law.description) {
            doc.fontSize(11)
               .fillColor('#333333')
               .text('Popis:', { underline: true });
            doc.moveDown(0.3);
            doc.fontSize(10)
               .fillColor('#444444')
               .text(law.description, { align: 'justify' });
            doc.moveDown(1);
        }

        // Key Points
        if (law.keyPoints && law.keyPoints.length > 0) {
            doc.fontSize(11)
               .fillColor('#333333')
               .text('Hlavní body:', { underline: true });
            doc.moveDown(0.3);

            law.keyPoints.forEach((point, index) => {
                doc.fontSize(10)
                   .fillColor('#444444')
                   .text(`• ${point}`, { indent: 15 });
            });
            doc.moveDown(1);
        }

        // Full Text
        if (law.fullText) {
            doc.addPage();

            doc.fontSize(14)
               .fillColor('#000000')
               .text('PLNÉ ZNĚNÍ', { align: 'center' });

            doc.moveDown(0.5);

            doc.strokeColor('#cccccc')
               .lineWidth(1)
               .moveTo(60, doc.y)
               .lineTo(535, doc.y)
               .stroke();

            doc.moveDown(1);

            // Process full text - split into paragraphs
            const paragraphs = law.fullText.split('\n\n');

            paragraphs.forEach(para => {
                const lines = para.split('\n');
                lines.forEach(line => {
                    // Check if it's a section header
                    if (line.match(/^(ČÁST|HLAVA|Díl|Oddíl|§|Čl\.)/)) {
                        doc.fontSize(11)
                           .fillColor('#000000')
                           .text(line, { align: line.startsWith('§') || line.startsWith('Čl.') ? 'left' : 'center' });
                    } else if (line.match(/^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ\s]+$/)) {
                        // ALL CAPS = title
                        doc.fontSize(12)
                           .fillColor('#000000')
                           .text(line, { align: 'center' });
                    } else {
                        doc.fontSize(10)
                           .fillColor('#333333')
                           .text(line, { align: 'justify' });
                    }
                });
                doc.moveDown(0.5);

                // Check if we need a new page
                if (doc.y > 700) {
                    doc.addPage();
                }
            });
        }

        // Footer on last page
        doc.fontSize(8)
           .fillColor('#999999')
           .text(`Vygenerováno: ${new Date().toLocaleDateString('cs-CZ')} | Zdroj: Sbírka zákonů ČR`,
                 60, 780, { align: 'center', width: 475 });

        doc.end();

        writeStream.on('finish', () => {
            console.log(`  ✓ ${filename}`);
            resolve(filepath);
        });

        writeStream.on('error', reject);
    });
}

// Helper function to format date
function formatDate(dateStr) {
    if (!dateStr) return 'N/A';
    const date = new Date(dateStr);
    return date.toLocaleDateString('cs-CZ');
}

// Main function
async function generateAllPdfs() {
    console.log('Generuji PDF soubory pro nové zákony...\n');

    const newLaws = lawsData.newLaws.filter(law => law.hasFullText);

    console.log(`Nalezeno ${newLaws.length} zákonů s plným zněním.\n`);

    for (const law of newLaws) {
        try {
            await generateLawPdf(law);
        } catch (error) {
            console.error(`  ✗ Chyba při generování ${law.id}: ${error.message}`);
        }
    }

    console.log('\n✓ Generování dokončeno!');
    console.log(`  Soubory uloženy v: ${outputDir}`);
}

// Run
generateAllPdfs().catch(console.error);
