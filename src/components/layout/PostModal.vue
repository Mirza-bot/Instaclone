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
            @click="uploadedImage = null"
          ></button>
        </div>
        <div class="modal-body">
          <img :src="shownImage" alt="Image" />
          <canvas></canvas>
          <input
            id="image_input"
            type="file"
            accept="image/*"
            style="display: none"
            @change="readFile($event)"
          />
          <button
            v-if="!uploadedImage"
            type="button"
            class="btn btn-primary upload_button"
            @click="openFile"
          >
            Bild hochladen
          </button>
          <div v-else>
            <input
              type="text"
              id="post_description"
              placeholder="Beschreibungstext hinzufügen..."
              v-bind="postDescription"
            />
            <button
              type="button"
              class="btn btn-primary submit_button"
              @click="post"
            >
              Posten
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
import ImageIcon from "../../assets/icons/images.svg";
import store from "../../store";
export default {
  setup() {
    const uploadedImage = ref(null);
    const postDescription = ref("");

    const shownImage = computed(() => {
      if (uploadedImage.value === null) return ImageIcon;
      else return uploadedImage.value;
    });
    const readFile = (event) => {
      const file = event.target.files[0];
      if (file && file.type.substr(0, 5) === "image") {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = (event) => {
          uploadedImage.value = event.target.result;
        };
      } else {
        uploadedImage.value = null;
      }
    };

    const post = () => {
      if (uploadedImage.value) {
        store.dispatch("sendPost", {
          image: uploadedImage.value,
          postDescription: postDescription.value
        })
      }
    }

    const openFile = () => {
      document.querySelector("#image_input").click();
    };

    return {
      openFile,
      shownImage,
      readFile,
      uploadedImage,
      postDescription,
      post
    };
  },
};
</script>

<style scoped>
img {
  display: block;
  min-width: 100px;
  max-width: 450px;
  margin: 40px auto;
}

.upload_button {
  display: block;
  margin: 40px auto;
}

#post_description {
  width: 100%;
  border: none;
  border-bottom: 1px solid lightgray;
}

#post_description:focus {
  outline: none;
  border-bottom: 2px solid rgba(185, 228, 255, 0.815);
}

.submit_button {
  display: block;
  margin: 10px auto;
}
</style>
