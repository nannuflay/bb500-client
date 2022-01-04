<template>
  <div class="w-full bg-base-200 p-10 flex justify-center">
    <div class="w-3/6">
      <div className=" p-4 bg-white w-full rounded-lg shadow-lg py-10">
        <h1 class="font-bold text-3xl text-center">Welcome back</h1>
        <div className=" w-5/6 mx-auto my-10">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Email</span>
            </label>
            <input
              v-model="email"
              type="text"
              placeholder="e-mail"
              className="input input-bordered focus:font-extrabold focus:text-lg"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Password</span>
            </label>
            <input
              v-model="password"
              type="password"
              placeholder="password     "
              className="input input-bordered focus:font-extrabold focus:text-lg"
            />
          </div>
          <span v-if="error" style="color: red;">Invalid email or/and password</span>
          <div
            className="flex flex-wrap justify-center my-4 text-sm  font-Roboto font-medium text-gray-600"
          >
            <button @click="login" className="w-5/6 btn btn-success my-8">Login</button>

            <span>
              Dont have an account yet?
              <a href="/register" className="link-primary">Sign up </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pink-tabs',
  data() {
    return {
      error: false,
      email: null,
      password: null
    };
  },
  methods: {
    login() {
      let context = this;
      let url = '/checkPassword';
      let payload = {
        email: this.email,
        password: this.password
      }
      this.axios.post(url, payload).then(response => {
        if(response.data.valid) {
          console.log(response.data);
          let login = {logged: true, name: response.data.name, id: response.data.id}
          localStorage.setItem('user', JSON.stringify(login));
          setTimeout(function() {
             window.location.href = '/my-profile';
            //context.$router.replace({ name: 'ProfileSettings' })
          }, 1500);
        } else {
          context.error = true;
        }
      });
    }
  }
};
</script>
