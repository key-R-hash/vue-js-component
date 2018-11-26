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
            <a class="btn btn-sm btn-outline-secondary mr-2" id="singup" href="Registration">Sign up</a>
            <a class="btn btn-sm btn-outline-secondary" id="singin" href="login">Sign in</a>

          </div>
        </div>
      </header>

      <div class="nav-scroller py-1 mb-2">
        <nav class="nav d-flex justify-content-between">
          <a class="p-2 text-muted" href="index?per=3&page=1">Home</a>
          <a class="p-2 text-muted" href="create-post">Create your post</a>
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
              <form id="myform" method="post" onsubmit="return false">
                <div class="form-group">
                    <label for="email">Email Address:</label>
                    <input v-model="email" type="email" class="form-control" id="email" name="email">
                </div>
                <div class="form-group">
                    <label for="password">Password:</label>
                    <input v-model="password" type="password" class="form-control" id="password" name="password">
                </div>
                <div class="form-group">
                    <button @click="mo" type="submit" class="btn btn-primary">Sing In</button>
                </div>
                <h1>
                  <div v-if="error !==  ''" class="alert alert-danger">{{error}}</div>
                </h1>
              </form>
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
import $ from 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import Holder from 'holderjs/holder.min.js'
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
export default {
  data () {
    return {
      name: null,
      password: null,
      email: null,
      error: ''
    }
  },
  methods: {
    mo () {
      axios
        .post('http://127.0.0.1:8000/api/login', {
          email: this.email,
          password: this.password
        })
        .then(response => {
          console.log(response.data.token)
          localStorage.setItem('storedData', response.data.token)
          location.reload()
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
