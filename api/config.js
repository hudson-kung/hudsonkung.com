module.exports = function handler(req, res) {
  res.status(200).json({
    clerkPublishableKey: process.env.CLERK_PUBLISHABLE_KEY || process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || ""
  });
};
