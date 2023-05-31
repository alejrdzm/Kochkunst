app.component('header-menu', {
  props: {
    page: {
      type: String,
    },
    url: {
      type: String,
    }
  },

  methods: {

  },
  template:
    /*html*/
    `<nav class="navbar navbar-expand-lg rounded-5 navbar-dark bg-dark">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item"><a class="nav-link" href="{{ url }}">{{ page }}</a></li>
            </li>
          </ul>
        </div>
      </div>
    </nav>`
})