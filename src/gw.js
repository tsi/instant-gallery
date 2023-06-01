const myWidget = cloudinary.galleryWidget({
  cloudName: config.cloudName,
  container: "#gw-container",
  mediaAssets: [
    { tag: config.tag, mediaType: "image" },
    { tag: config.tag, mediaType: "video" },
  ],
  carouselLocation: "bottom",
  carouselOffset: 10,
  navigation: "always",
  thumbnailProps: {
    mediaSymbolSize: 42,
    spacing: 20,
    width: 60,
    height: 60,
    navigationFloat: true,
    navigationShape: "none",
    navigationSize: 40,
    navigationColor: "#ffffff",
    selectedStyle: "gradient",
    selectedBorderPosition: "bottom",
    selectedBorderWidth: 4,
    navigationIconColor: "#000000",
    mediaSymbolShape: "square",
  },
  navigationButtonProps: {
    iconColor: "#000000",
    color: "#ffffff",
    size: 52,
    navigationPosition: "offset",
    navigationOffset: 12,
  },
  themeProps: {
    primary: "#8c8c8c",
    active: "#0058ff",
  },
  transition: "fade",
  zoomProps: {
    type: "popup",
    steps: 3,
  },
});
myWidget.render();
