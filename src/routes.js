import Task from 'containers/task/'
import Reward from 'containers/reward/'
import Rank from 'containers/rank/'
import Rule from 'containers/rule/'

export default function (router) {
  router.map({
    'task': {
      name: 'task',
      component: Task
    },
    'reward': {
      name: 'reward',
      component: Reward
    },
    'rank': {
      name: 'rank',
      component: Rank
    },
    'Rule': {
      name: 'rule',
      component: Rule
    }
  })
}
