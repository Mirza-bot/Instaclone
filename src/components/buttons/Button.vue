<template>
  <button>
    <img :src="buttonSwitch(iconName, status)" :alt="altValue" />
  </button>
</template>

<script>
import HouseIcon from "../../assets/icons/house-door-fill.svg";
import CompassIcon from "../../assets/icons/compass.svg";
import PaperPlaneIcon from "../../assets/icons/send.svg";
import PlusIcon from "../../assets/icons/plus-square.svg";
import HeartIcon from "../../assets/icons/heart.svg";
import HeartIconActive from "../../assets/icons/heart-fill.svg";
import BookmarkIcon from "../../assets/icons/bookmark.svg";
import BookmarkIconActive from "../../assets/icons/bookmark-fill.svg";
import ChatIcon from "../../assets/icons/chat.svg";
import WritingIcon from "../../assets/icons/pencil-square.svg";
import InfoIcon from "../../assets/icons/info-circle.svg";
export default {
  props: {
    iconName: String,
    altValue: String,
    status: String,
    route: String,
  },
  setup() {
    // Wechselt die Icons für Buttons anhand der übergebenen Props
    const buttonSwitch = (iconName, status) => {
      if (iconName === "HouseIcon" && status === "inactive") return HouseIcon;
      else if (iconName === "CompassIcon" && status === "inactive")
        return CompassIcon;
      else if (iconName === "PaperplaneIcon" && status === "inactive")
        return PaperPlaneIcon;
      else if (iconName === "PlusIcon" && status === "inactive")
        return PlusIcon;
      else if (iconName === "HeartIcon" && status === "inactive")
        return HeartIcon;
      else if (iconName === "HeartIcon" && status === "active")
        return HeartIconActive;
      else if (iconName === "BookmarkIcon" && status === "inactive")
        return BookmarkIcon;
      else if (iconName === "BookmarkIcon" && status === "active")
        return BookmarkIconActive;
      else if (iconName === "ChatIcon" && status === "inactive")
        return ChatIcon;
      else if (iconName === "WritingIcon" && status === "inactive")
        return WritingIcon;
      else if (iconName === "InfoIcon" && status === "inactive")
        return InfoIcon;
    };
    // Wechselt die Route anhand der übergebenen prop.

    return {
      buttonSwitch,
    };
  },
};
</script>

<style scoped>
button {
  border: none;
  background-color: white;
}

img {
  width: 23px;
  height: 23px;
}
</style>
