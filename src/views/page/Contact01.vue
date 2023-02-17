<template>
  <div class="form-wrapper">
    <div class="form-sent" v-if="sent">送信しました</div>
    <form id="formapp" @submit="checkForm">
      <div v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul>
          <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
        </ul>
      </div>
      <div>
        <label for="your-company">御社名／所属(必須)</label>
        <input id="your-company" v-model="company" type="text" name="your-company">
      </div>
      <div>
        <label for="your-name">お名前(必須)</label>
        <input id="your-name" v-model="name" type="text" name="your-name">
      </div>
      <div>
        <label for="your-email">E-mail(必須)</label>
        <input id="your-email" v-model="email" type="text" name="your-email" min="0">
      </div>
      <div>
        <label for="your-address">ご住所</label>
        <input id="your-address" v-model="address" type="text" name="your-address" min="0">
      </div>
      <div>
        <label for="your-number">電話番号(必須)</label>
        <input id="your-number" v-model="number" type="number" name="your-number">
      </div>
      <div>
        <label for="your-message">お問い合わせ内容 (必須)</label>
        <textarea id="your-message" v-model="message" name="your-message" cols="30" rows="10"></textarea>
      </div>
      <div>
        <input type="submit" value="Submit">
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      sent: false,
      errors: [],
      company: null,
      name: null,
      email: null,
      address: null,
      number: null,
      message: null
    };
  },
  methods: {
    validEmail: function(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    checkForm: function(e) {
      e.preventDefault();
      this.errors = [];

      if (!this.company) {
        this.errors.push("Company required.");
      }
      if (!this.name) {
        this.errors.push("Name required.");
      }
      if (!this.email) {
        this.errors.push("Email required.");
      } else if (!this.validEmail(this.email)) {
        this.errors.push("Valid email required.");
      }
      if (!this.number) {
        this.errors.push("Number required.");
      }
      if (!this.message) {
        this.errors.push("Message required.");
      }

      if (!this.errors.length) {
        var bodyFormData = new FormData();
        bodyFormData.set("your-company", this.company);
        bodyFormData.set("your-name", this.name);
        bodyFormData.set("your-email", this.email);
        bodyFormData.set("your-number", this.number);
        bodyFormData.set("your-message", this.message);

        axios({
          method: "post",
          url:
            "http://vue.local/contact/wp-json/contact-form-7/v1/contact-forms/53/feedback",
          data: bodyFormData,
          config: { headers: { "Content-Type": "multipart/form-data" } }
        })
          .then(function(response) {
            console.log(response);
            this.sent = true;
            return true;
          })
          .catch(function(response) {
            console.log(response);
          });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.form-wrapper {
  position: relative;
  .form-sent {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.9);
  }
}
</style>

<style lang="scss">
.page-content {
  margin: 50px;
  h1 {
    font-size: 50px;
    margin-bottom: 50px;
  }
}

.content-txt,
p {
  font-size: 16px;
}
input {
  width: 300px;
  height: 40px;
  border: 1px solid #000;
  padding: 10px !important;
  box-sizing: border-box;
  margin: 10px 0 !important;
}
input[type="file"] {
  border: 0px !important;
}
select {
  margin: 10px 0 !important;
  appearance: auto !important;
  width: 100px;
  border: 1px solid #000;
  padding: 5px !important;
  box-sizing: border-box;
}
textarea {
  margin: 10px 0 !important;
  width: 300px;
  border: 1px solid #000;
  padding: 10px !important;
  box-sizing: border-box;
}
input[type="submit"] {
  margin-top: 10px;
  width: 100px;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #000;
  text-align: center;
}
.form-wrapper {
  position: relative;
  .form-sent {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.9);
  }
}
</style>