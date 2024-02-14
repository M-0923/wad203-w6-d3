# Github Actions

```mermaid
%%{
  init: {
    'theme': 'base',
    'themeVariables': {
      'primaryColor': '#BB2528',
      'primaryTextColor': '#fff',
      'primaryBorderColor': '#F8B229',
      'lineColor': '#F8B229',
      'secondaryColor': '#006100',
      'tertiaryColor': '#fff'
    },
    'sequence': {
        'messageAlign': 'center',
        'noteAlign':'left'
    }
  }
}%%
sequenceDiagram
    autonumber

    User->>Github: Push code to Github
    Github->>CI: Trigger CI
    Note over CI: Build, test <br>and merge code
    CI->>Github: Automate release to repository (CD)
    Github->>User: Notify the user of the result
    Github->>CD: Automate deployment to production
```

## Components of a GitHub Actions Workflow

It composes of the following components (also terminologies):

- **Workflow**
- **Events**
- **Job**
- **Step**
- **Runner**

```mermaid
%%{
  init: {
    'theme': 'base',
    'themeVariables': {
      'primaryColor': '#BB2528',
      'primaryTextColor': '#fff',
      'primaryBorderColor': '#F8B229',
      'lineColor': '#F8B229',
      'secondaryColor': '#006100',
      'tertiaryColor': '#fff'
    },
    'sequence': {
        'messageAlign': 'left',
        'noteAlign':'left'
    }
  }
}%%
sequenceDiagram
    autonumber

    Event->>Workflow: Events are the triggers that start a workflow
    Note right of Runner:A runner is a server that runs the jobs in a workflow.

    %% Note over Event,Workflow:A typical interaction
    Note over Event: - Push (branch, tag)<br>- Pull Request<br>- Issue<br>#nbsp;#nbsp;- Opened<br>#nbsp;#nbsp;- Closed<br>#nbsp;#nbsp;- Created<br>#nbsp;#nbsp;- ...

    Note over Workflow: A workflow is a set of jobs that are run <br>when a specific event occurs.
    Note right of Workflow: Job: A job is a set of steps that are run on the same runner.<br>#nbsp;#nbsp;- Steps is a set of tasks that are run in sequence.

    Note right of Workflow: Job 1 (Runner 1): <br>#nbsp;#nbsp;Step 1: Action<br>#nbsp;#nbsp;Step 2: Shell command<br>#nbsp;#nbsp;Step 3: Action
    Workflow->>Runner: Each Job is associated with a runner
    Note right of Runner:Runner 1: Runs the step in sequence<br>#nbsp;#nbsp;Run Step 1...<br>#nbsp;#nbsp;Run Step 2...<br>#nbsp;#nbsp;Run Step 3...


    Note right of Workflow: Job 2 (Runner 2): <br>#nbsp;#nbsp;Step 1: Action<br>#nbsp;#nbsp;Step 2: Shell command<br>#nbsp;#nbsp;Step 3: Action
    Workflow->>Runner: Each Job is associated with a runner
    Note right of Runner:Runner 2: Runs the step in sequence<br>#nbsp;#nbsp;Run Step 1...<br>#nbsp;#nbsp;Run Step 2...<br>#nbsp;#nbsp;Run Step 3...
```

## Setup Environment Variables

You can view this [link](https://vercel.com/guides/how-can-i-use-github-actions-with-vercel) to learn how to setup environment variables in Github Actions.

And have a look at these screenshots:

![image](public/Code%20security%20&%20analysis%202024-02-14%2012-10-13.png)
![image](public/Code%20security%20&%20analysis%202024-02-14%2012-10-35.png)
![image](public/Actions%20secrets%20·%20M-0923:wad203-w6-d3%202024-02-14%2012-10-59.png)

## Documentation

You can check the [documentation](https://docs.github.com/en/actions/reference/events-that-trigger-workflows) for more **events**.