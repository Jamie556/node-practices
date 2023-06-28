const { preventAvalanche } = require('./help');

function getEventKey(key) {
  return `demoService_${key}`;
}

exports.getDemoService = function(SQLModel) {
  return {
    findOne(id) {
      return new Promise((resolve) => {
        const key = getEventKey(`findOne_${id}`);
        preventAvalanche(key, () => {
          return SQLModel.findOne({
            raw: true,
            where: { id },
            attributes: {
              exclude: [ 'created_time', 'updated_time' ],
            },
          });
        }, resolve);
      });
    }
  };
}
