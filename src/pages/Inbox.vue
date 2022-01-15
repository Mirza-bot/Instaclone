<template>
  <div>
    <div class="chat__container">
      <div class="row chat__header">
        <div class="col-4 user__header">
          <div class="my-3">
            <strong class="username">Username</strong>
            <Button
            class="float-end"
              :iconName="'WritingIcon'"
              :status="'inactive'"
              :altValue="'Activitesbutton'"
            ></Button>
          </div>
        </div>
        <div class="col-8">
          <div class="header__reciver">
              <user-tiles></user-tiles>
              <Button
            class="float-end mt-1"
              :iconName="'InfoIcon'"
              :status="'inactive'"
              :altValue="'Activitesbutton'"
            ></Button>
          </div>
        </div>
      </div>
      <div class="row chat__content">
        <div class="col-4 contact__window p-0">
            <UserChatIcon></UserChatIcon>
        </div>
        <div class="col-8">fafsf</div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../components/buttons/Button.vue";
import UserTiles from '../components/layout/UserTiles.vue';
import UserChatIcon from "../components/layout/UserChatIcon.vue";
export default {
    components: { Button, UserTiles, UserChatIcon },
    setup() {
        return {};
    },
};
</script>

<style scoped>
div.chat__container {
  width: 55vw;
  height: 90vh;
  margin: 20px auto 0 auto;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 3px;
  padding: 0 13px;
  overflow: hidden;
}

div.chat__header {
  border-bottom: 1px solid lightgray;
}

div.user__header {
  border-right: 1px solid lightgray;
}


strong.username {
    margin-left: 35%;
    color: rgb(100, 100, 100);
    font-size: 0.9rem;
}

div.header__reciver {
    margin: 10px 5%;
}

div.chat__content {
    height: 100%;
}

div.contact__window {
    border-right: 1px solid lightgray;
}
</style>
