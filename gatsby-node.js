exports.createPages = async ({ actions }) => {
  const { createPage } = actions

  createPage({
    path: "/test",
    component: require.resolve("./src/templates/test.js"),
    context: {},
    defer: true,
  })
}
