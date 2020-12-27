function authMiddleware(req, res, next) {
  if (req.path === '/authentication/authenticate' || req.path === '/self') {
    return next();
  }

  if (!req.session.user || !req.session.user.id) {
    return res.status(401).json({ message: 'Unauthenticated' });
  }

  next();
}

export default authMiddleware;