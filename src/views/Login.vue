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
              type="text"
              placeholder="e-mail"
              className="input input-bordered  focus:text-white focus:font-extrabold focus:text-lg"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Password</span>
            </label>
            <input
              type="password"
              placeholder="password     "
              className="input input-bordered  focus:text-white focus:font-extrabold focus:text-lg"
            />
          </div>
          <div
            className="flex justify-end my-2 text-sm link-primary font-Roboto font-medium"
          >
            <a href="#"> Forgot password?</a>
          </div>
          <div
            className="flex flex-wrap justify-center my-4 text-sm  font-Roboto font-medium text-gray-600"
          >
            <button className="w-5/6 btn btn-success my-8">Login</button>

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
      user: {
        name: '',
        email: '',
        address: '',
        category: '',
        phone: '',
        lat: null,
        lng: null,
        bio: '',
      },
    };
  },
};
</script>
