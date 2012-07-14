mojito-example-youtube
======================
Simple Yahoo Mojito Example of Youtube Search

   
How to setup this example
-------------------------

1.  Install Node
2.  Install Mojito
<pre>```npm install mojito -g
```</pre>
3.  Create App and Mojit
<pre>```$ mojito create app youtubesearch
$ cd youtubesearch
$ mojito create mojit containerMojit
$ mojito create mojit searchResultMojit
```</pre>
4.  Modify application.json
5.  Modify routes.json
6.  Modify mojits MVCs. Get the full code here
<pre>```Get from github
git clone https://github.com/markandey/mojito-example-youtube.git
```</pre>

**HTMLFrameMojit** is inbuilt mojit in the Mojito framework which
creates basic html layout. In the example we have created a
**containerMojit**, which is a composite mojit. Then In
**searchResultMojit** we have created binder to handle click of search
button. We are using ***mojitProxy*** to tunnel the request to mojit. We
never bothered about the location of searchResultMojit and framework
automatically tunnels the request to mojit either it is on server or it
is on client. There is a way to lazyLoad a mojit.   
   
I have used YQL to get youtube search result. To Read more about the
YQL read here.
