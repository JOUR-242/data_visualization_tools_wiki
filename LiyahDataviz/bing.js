var po = org.polymaps;
  
  var div = document.getElementById("map");
  
  var map = po.map()
      .container(div.appendChild(po.svg("svg")))
      .add(po.interact());
  
  /*
   * Load the "AerialWithLabels" metadata. "Aerial" and "Road" also work. For more
   * information about the Imagery Metadata service, see
   * http://msdn.microsoft.com/en-us/library/ff701716.aspx
   * You should register for your own key at https://www.bingmapsportal.com/.
   */
  var script = document.createElement("script");
  script.setAttribute("type", "text/javascript");
  script.setAttribute("src", "http://dev.virtualearth.net"
        "/REST/V1/Imagery/Metadata/AerialWithLabels"
        "?key=AmT-ZC3HPevQq5IBJ7v8qiDUxrojNaqbW1zBsKF0oMNEs53p7Nk5RlAuAmwSG7bg"
        "&jsonp=callback");
  document.body.appendChild(script);
  
  function callback(data) {
  
    /* Display each resource as an image layer. */
    var resourceSets = data.resourceSets;
   for (var i = 0; i < resourceSets.length; i  ) {
     var resources = data.resourceSets[i].resources;
      for (var j = 0; j < resources.length; j  ) {
        var resource = resources[j];
        map.add(po.image()
            .size({x: resource.imageWidth, y: resource.imageHeight})
            .url(template(resource.imageUrl, resource.imageUrlSubdomains)));
      }
    }
  
    /* Display brand logo. */
    var logo = new Image();
    logo.setAttribute("id", "logo");
    logo.src = data.brandLogoUri;
    div.appendChild(logo);
  
    /* Display copyright notice. */
    var copy = div.appendChild(document.createElement("div"));
    copy.setAttribute("id", "copy");
    copy.appendChild(document.createTextNode(data.copyright));
  
    /* Display compass control. */
    map.add(po.compass()
        .pan("none"));
  
  }
  
  function quad(column, row, zoom) {
    var key = "";
    for (var i = 1; i <= zoom; i  ) {
      key  = (((row >> zoom - i) & 1) << 1) | ((column >> zoom - i) & 1);
    }
    return key;
  }
  
  function template(url, subdomains) {
    var n = subdomains.length,
        salt = ~~(Math.random() * n); // per-session salt
    return function(c) {
      var quadKey = quad(c.column, c.row, c.zoom),
          server = Math.abs(salt   c.column   c.row   c.zoom) % n;
      return url
          .replace("{quadkey}", quadKey)
          .replace("{subdomain}", subdomains[server]);
    };
  }