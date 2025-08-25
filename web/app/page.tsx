export default function Page() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Niobium Developer Website</h1>
      <p>
        <strong>Welcome to the Niobium developer documentation.</strong>
      </p>

      <p>
        The documentation is structured according to the categories explained
        in the <a href="https://docs.divio.com/documentation-system/">Divio
        documentation system</a>. In this system, the categories are aligned
        with the goal a person has when referencing the documentation.
        Knowing this will help you easily find your way to the relevant
        documents.
      </p>

      <p> The categories are:
      </p>

      <ul>
        <li><strong>Tutorials</strong>&mdash;Learning-oriented, most helpful when studying.</li>
        <li><strong>How-to Guides</strong>&mdash;Problem-oriented, most helpful when completing a specific task.</li>
        <li><strong>Explanations</strong>&mdash;Understanding-oriented, most helpful when learning the big picture.</li>
        <li><strong>Reference</strong>&mdash;Information-oriented, most helpful when needing to know a specific detail for the problem at hand.</li>
      </ul>

    <h2>Getting Help</h2>
      <p>If you encounter any problems using the documentation, please <a
      href="https://github.com/NiobiumInc/niobium-sdk/issues">open an
      issue</a>.
      </p>

    <h2>Contributing</h2>
      <p>This website is source code, too! If you are interested in helping
      to improve the documentation or have suggestions to do so, please
      consider <a
      href="https://github.com/NiobiumInc/niobium-sdk/pulls">opening a
      pull request</a> with your changes.
    </p>
    </div>
  );
}
