
window.ml = cloudinary.createMediaLibrary(
  {
    cloud_name: config.cloudName,
    api_key: config.apiKey,
    remove_header: true,
    multiple: true,
    insert_caption: "",
    inline_container: "body",
    default_transformations: [[]],
    button_class: "myBtn",
    button_caption: "Select Image or Video",
    folder: {path: "my-gallery"}
  },
  {
    insertHandler: function (data) {
      data.assets.forEach((asset) => {
        console.log("Inserted asset:", JSON.stringify(asset, null, 2));
      });
    }
  },
  document.getElementById("open-btn")
);

window.ml.show()
