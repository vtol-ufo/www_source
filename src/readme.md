components  - components that used reused on pages
  --atoms - can contain other atoms, but must present very simple object 
  --molecules - combination of multiple atoms
  --remotes - remote interfaces to work with service using AJAX
  --organisms - combination of molecules + bussiness behaviour
  --utils - helper classes that helps calculate something or provide some functionality

templates - define common look & feel of pages
  -- flatpage  - template that offer top menu and side page structure menu and consists of frames
  ---- atoms   - specific or private only for this template
  ---- molecules - specific or private only for this template
  ---- ... - specific or private only for this template

pages - user interface pages
  -- somepage - concrete user interface page extends/implements template defines frames from which page consists
  ---- somepage.js - page entry point
  ---- frames - page blocks (Actually can be separete screens/pages with non flatpage template)
  ---- atoms   - specific or private only for this page
  ---- molecules - specific or private only for this page
  ---- ... - specific or private only for this page

