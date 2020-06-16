function main() {
    Logger.log("START SCRIPT");
    
    const doc = SlidesApp.getActivePresentation();

    const slides = doc.getSlides();

    slides
    .forEach(slide => {
        alterarTituloSlide(slide);
    });

    execRemoteScript();

    Logger.log("DONE SCRIPT");
};

function alterarTituloSlide(slide) {
    slide
    .getShapes()
    .filter(shape => {
        return shape.getTitle = "Título"
    })
    .forEach(shape => {
        shape.getText().setText("Hello World");
    });
}
