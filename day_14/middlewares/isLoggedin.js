// Middleware: Check if user is logged in
const isLoggedIn = (req, res, next) => {
  // 🍪 Get token from cookie
  const token = req.cookies.token;

  // ❌ No token? Not authenticated.
  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    // ✅ Verify token
    const decoded = jwt.verify(token, JWT_SECRET);

    // ✅ Attach user info to request object
    req.user = decoded; // { id: '...', email: '...', iat: ..., exp: ... }

    // ✅ User is authenticated, proceed
    next();
  } catch (error) {
    // ❌ Invalid or expired token
    return res.status(401).json({ message: 'Invalid or expired token.' });
  }
};