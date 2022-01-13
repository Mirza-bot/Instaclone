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
import BookmarkIcon from "../../assets/icons/bookmark.svg";
import ChatIcon from "../../assets/icons/chat.svg";
export default {
    props: {
        iconName: String,
        altValue: String,
        status: String
    },
    setup() {
        // Wechselt die Icons für Buttons anhand der übergebenen Props
        const buttonSwitch = (iconName, status) => {
            if (iconName === "HouseIcon" && status === "inactive") return HouseIcon
            else if (iconName === "CompassIcon" && status === "inactive") return CompassIcon
            else if (iconName === "PaperplaneIcon" && status === "inactive") return PaperPlaneIcon
            else if (iconName === "PlusIcon" && status === "inactive") return PlusIcon
            else if (iconName === "HeartIcon" && status === "inactive") return HeartIcon
            else if (iconName === "BookmarkIcon" && status === "inactive") return BookmarkIcon
            else if (iconName === "ChatIcon" && status === "inactive") return ChatIcon  
        }


        return {
            buttonSwitch
        }
    },
}
</script>


<style scoped>
button {
  border: none;
  background-color: white;
  margin: 5px 10px 0 0;
  transform: scale(1.5);
}
</style>