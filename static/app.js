(function(){
  const USERS_KEY = 'ok_users';
  const CURRENT_USER_KEY = 'ok_current_user';

  function defaultUsers(){
    return {
      dost: { username: 'dost', password: 'dost123', display_name: 'Dost', can_post_solution: true },
      learner: { username: 'learner', password: 'learner123', display_name: 'Learner', can_post_solution: false }
    };
  }

  function getUsers(){
    const raw = localStorage.getItem(USERS_KEY);
    if(!raw){
      const seeded = defaultUsers();
      localStorage.setItem(USERS_KEY, JSON.stringify(seeded));
      return seeded;
    }
    try {
      const parsed = JSON.parse(raw);
      return parsed && typeof parsed === 'object' ? parsed : defaultUsers();
    } catch (e){
      return defaultUsers();
    }
  }

  function saveUsers(users){
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }

  function getCurrentUser(){
    const users = getUsers();
    const username = localStorage.getItem(CURRENT_USER_KEY);
    if(!username || !users[username]) return null;
    return users[username];
  }

  function login(username, password){
    const users = getUsers();
    const key = String(username || '').trim().toLowerCase();
    const user = users[key];
    if(!user || user.password !== password) return { ok: false, error: 'Invalid username or password.' };
    localStorage.setItem(CURRENT_USER_KEY, key);
    return { ok: true, user: user };
  }

  function signup(displayName, username, password){
    const users = getUsers();
    const key = String(username || '').trim().toLowerCase();
    if(!key || key.length < 3) return { ok: false, error: 'Username must be at least 3 characters.' };
    if(users[key]) return { ok: false, error: 'Username already exists.' };
    if(!password || password.length < 6) return { ok: false, error: 'Password must be at least 6 characters.' };
    users[key] = {
      username: key,
      password: password,
      display_name: String(displayName || '').trim() || key.charAt(0).toUpperCase() + key.slice(1),
      can_post_solution: false
    };
    saveUsers(users);
    localStorage.setItem(CURRENT_USER_KEY, key);
    return { ok: true, user: users[key] };
  }

  function logout(){
    localStorage.removeItem(CURRENT_USER_KEY);
  }

  function renderHeaderActions(selector){
    const el = typeof selector === 'string' ? document.querySelector(selector) : selector;
    if(!el) return;
    const user = getCurrentUser();
    if(user){
      el.innerHTML = '<span class="user-pill">' + user.display_name + '</span><a class="btn btn-ghost" href="#" data-logout="1">Logout</a>';
    } else {
      el.innerHTML = '<a class="btn btn-ghost" href="login.html">Login</a><a class="btn btn-solid" href="signup.html">Start Free</a>';
    }

    const logoutBtn = el.querySelector('[data-logout="1"]');
    if(logoutBtn){
      logoutBtn.addEventListener('click', function(e){
        e.preventDefault();
        logout();
        window.location.href = 'index.html';
      });
    }
  }

  window.OKAuth = {
    getUsers: getUsers,
    saveUsers: saveUsers,
    getCurrentUser: getCurrentUser,
    login: login,
    signup: signup,
    logout: logout,
    renderHeaderActions: renderHeaderActions
  };
})();
