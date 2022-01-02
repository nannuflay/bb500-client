<template>
  <div class="w-full bg-base-200 p-10 flex justify-center">
    <div class="w-3/6">
      <div className=" p-4 bg-white w-full rounded-lg shadow-lg">
        <h1 class="font-bold text-3xl text-center my-5">Create account</h1>

        <div className=" mx-auto my-10">
          <div class="flex items-center w-full justify-between">
            <div class="form-control w-2/6">
              <label class="label">
                <span class="label-text font-bold">Full name</span>
              </label>
              <input
                v-model="user.name"
                type="text"
                placeholder="Full name"
                class="input bg-slate-100 text-lg font-medium"
              />
            </div>
            <div class="form-control w-3/5">
              <label class="label">
                <span class="label-text font-bold">Email</span>
              </label>
              <input
                v-model="user.email"
                type="text"
                placeholder="Email"
                class="input bg-slate-100 text-lg font-medium"
              />
            </div>
          </div>
          <div class="flex items-center justify-between">
            <div class="form-control w-3/5">
              <label class="label">
                <span class="label-text font-bold">Address</span>
              </label>
              <input
                v-model="user.address"
                type="text"
                placeholder="Address"
                class="input bg-slate-100 text-lg font-medium"
              />
            </div>
            <div class="form-control w-1/5 flex-1 ml-5">
              <label class="label">
                <span class="label-text font-bold">Category</span>
              </label>
              <select
                class="select select-bordered w-full max-w-xs bg-slate-100"
                v-model="user.category"
              >
                <option disabled="disabled" selected="selected">
                  Choose your category
                </option>
                <option>Artist</option>
                <option>option 2</option>
                <option>option 3</option>
              </select>
            </div>
          </div>
          <div
            class="w w-full flex items-center justify-between flex-wrap mt-3"
          >
            <div class="form-control w-2/5">
              <label class="label">
                <span class="label-text font-bold">Lat</span>
              </label>
              <input
                v-model="user.lat"
                type="number"
                placeholder="Latitude"
                class="input bg-slate-100 text-lg font-medium"
              />
            </div>
            <div class="form-control w-2/5">
              <label class="label">
                <span class="label-text font-bold">Lng</span>
              </label>
              <input
                v-model="user.lng"
                type="number"
                placeholder="Longitude"
                class="input bg-slate-100 text-lg font-medium"
              />
            </div>
          </div>
          <div
            className="flex flex-wrap justify-center my-4 text-sm  font-Roboto font-medium text-gray-600"
          >
            <button className="w-5/6 btn btn-success my-8">Sign up</button>

            <span>
              Do you already have an account?
              <a href="/login" className="link-primary"> Login </a>
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
