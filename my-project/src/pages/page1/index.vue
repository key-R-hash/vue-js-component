<template>

<div>
  <body>

    <div class="container">
      <header class="blog-header py-3">
        <div class="row flex-nowrap justify-content-between align-items-center">
          <div class="col-4 pt-1">
            <a class="text-muted" href="#">Subscribe</a>
          </div>
          <div class="col-4 text-center">
            <a class="blog-header-logo text-dark" href="#">Large</a>
          </div>
          <div class="col-4 d-flex justify-content-end align-items-center">
            <a class="text-muted" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mx-3"><circle cx="10.5" cy="10.5" r="7.5"></circle><line x1="21" y1="21" x2="15.8" y2="15.8"></line></svg>
            </a>
            <a class="btn btn-sm btn-outline-secondary mr-2" @click="logout" id="logout" href="#">Logout</a>
            <a class="btn btn-sm btn-outline-secondary mr-2" id="singup" href="Registration.html">Sign up</a>
            <a class="btn btn-sm btn-outline-secondary" id="singin" href="login.html">Sign in</a>
          </div>
        </div>
      </header>

      <div class="nav-scroller py-1 mb-2">
        <nav class="nav d-flex justify-content-between">
          <a class="p-2 text-muted" href="index.html">Home</a>
          <a class="p-2 text-muted" href="create-post.html">Create your post</a>

        </nav>
      </div>

      <div class="jumbotron p-3 p-md-5 text-white rounded bg-dark">
        <div class="col-md-6 px-0">
          <h1 class="display-4 font-italic">Title of a longer featured blog post</h1>
          <p class="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.</p>
          <p class="lead mb-0"><a href="#" class="text-white font-weight-bold">Continue reading...</a></p>
        </div>
      </div>

    <main role="main" class="container">
      <div class="row">
        <div class="col-md-8 blog-main">
          <h3 class="pb-3 mb-4 font-italic border-bottom">
            From the Firehose
          </h3>
          <div id="myform">
            <!-- <button @click="mo"  class="btn btn-danger mb-3">click</button> -->
            <ul class="w-100" v-for="log in current"  :key="log.id">
              <li class="w-100 float-left" style="list-style: none">
                  <h1  class="float-left">
                    <a style="text-decoration:none;color : black"  :href="'post.html?kia=' + log.id">
                      {{log.title}}
                    </a>
                  </h1>
                   <a class="bg-info float-right pt-1 pb-1 pr-3 pl-3 rounded" style="color:black;text-decoration:none" :href="'update.html?kia=' + log.id">edit</a>
              </li>
              <li style="list-style: none">
                <p class="float-left">
                  {{log.body}}

                </p>
              </li>
            </ul>
            <!-- <template>
                <div id="error">
                  <error></error>
                </div>
            </template> -->
            <!-- <h1>
              <div id="error" v-if="error !==  ''" class="alert alert-danger">{{error}}</div>
            </h1>     -->
          </div>
          <nav class="blog-pagination float-left w-100">
            <a class="btn btn-outline-primary" href="#">Older</a>
            <a class="btn btn-outline-secondary disabled" href="#">Newer</a>
          </nav>

        </div><!-- /.blog-main -->

        <aside class="col-md-4 blog-sidebar">
          <div class="p-3 mb-3 bg-light rounded">
            <h4 class="font-italic">About</h4>
            <p class="mb-0">Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
          </div>

          <div class="p-3">
            <h4 class="font-italic">Archives</h4>
            <ol class="list-unstyled mb-0">
              <li><a href="#">March 2014</a></li>
              <li><a href="#">February 2014</a></li>
              <li><a href="#">January 2014</a></li>
              <li><a href="#">December 2013</a></li>
              <li><a href="#">November 2013</a></li>
              <li><a href="#">October 2013</a></li>
              <li><a href="#">September 2013</a></li>
              <li><a href="#">August 2013</a></li>
              <li><a href="#">July 2013</a></li>
              <li><a href="#">June 2013</a></li>
              <li><a href="#">May 2013</a></li>
              <li><a href="#">April 2013</a></li>
            </ol>
          </div>

          <div class="p-3">
            <h4 class="font-italic">Elsewhere</h4>
            <ol class="list-unstyled">
              <li><a href="#">GitHub</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Facebook</a></li>
            </ol>
          </div>
        </aside><!-- /.blog-sidebar -->

      </div><!-- /.row -->

    </main><!-- /.container -->

    <footer class="blog-footer">
      <p>Blog template built for <a href="https://getbootstrap.com/">Bootstrap</a> by <a href="https://twitter.com/mdo">@mdo</a>.</p>
      <p>
        <a href="#">Back to top</a>
      </p>
    </footer>
    </div>
  </body>

</div>

</template>
<script>
import axios from 'axios'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import Holder from 'holderjs/holder.min.js'
// import Popper from 'vue-popperjs'
// import 'bootstrap/dist/js/bootstrap.min.js'
// import 'bootstrap/dist/js/bootstrap.js'
// import "bootstrap-vue/dist/bootstrap-vue.css"
Holder.addTheme('thumb', {
  bg: '#55595c',
  fg: '#eceeef',
  text: 'Thumbnail'
})
var singin = $('#singin')
var singup = $('#singup')
var logout = $('#logout')
if (/\w+/.test(localStorage.getItem('storedData'))) {
  singin.hide()
  singup.hide()
  logout.show()
} else {
  logout.hide()
  singin.show()
  singup.show()
}
function get (param) {
  var location = window.location.search
  var regex = new RegExp(param)
  if (regex.test(location)) {
    var value = location.split(param + '=')[1]
    console.log(param + '=')
    if (/&/.test(value)) {
      var values = value.split('&')[0]
    } else {
      values = value
    }
    return values
  }
}
export default {
  name: 'index',
  data () {
    return {
      num: 0,
      token: null,
      current: '',
      error: ''
    }
  },
  mounted () {
    console.log('aaa')
    this.mo()
  },
  methods: {
    mo () {
      axios
        .get(
          'http://127.0.0.1:8000/api/posts' +
            '?' +
            'per=' +
            get('per') +
            '&' +
            'page=' +
            get('page'),
          {
            headers: {
              Authorization: localStorage.getItem('storedData')
            }
          }
        )
        .then(response => {
          console.log(response.data.data)
          this.current = response.data.data
        })
        .catch(error => {
          this.error = error.response.status
        })
    },
    logout () {
      console.log('logout')
      localStorage.setItem('storedData', '')
      location.reload()
    }
  }
}
</script>
