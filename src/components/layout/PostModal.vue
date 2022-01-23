<template>
  <div
    class="modal fade"
    id="newPost"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            Neuen Beitrag erstellen
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <img :src="ImageIcon" alt="ImageIcon" />
          <input
            id="imageUpload"
            type="file"
            accept="image/png, image/jpg"
            style="display: none"
          />
          <button
            type="button"
            class="btn btn-primary upload_button"
            @click="openFile"
          >
            Bild hochladen
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ImageIcon from "../../assets/icons/images.svg";
export default {
  setup() {

    const openFile = () => {
      document.getElementById('imageUpload').click()
    }

    return {
      ImageIcon,
      openFile
    };
  },
};
</script>

<style scoped>
img {
  display: block;
  min-width: 100px;
  max-width: 490px;
  margin: 40px auto;
}

.upload_button {
  display: block;
  margin: 40px auto;
}
</style>
