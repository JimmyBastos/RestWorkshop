module.exports = (Sequelize, DataType) => {
  const Contact = Sequelize.define('Contact', {
    id: {
      type: DataType.UUID,
      defaultValue: DataType.UUIDV4,
      primaryKey: true
    },
    email: {
      type: DataType.STRING,
      validate: {
        isEmail: true
      }
    },
    firstName: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    lastName: {
      type: DataType.STRING,
      allowNull: false
    },
    phoneNumber: {
      type: DataType.STRING,
      validate: {
        // Verify if the phone number match this pattern +99 (99) 99999-9999
        is: /^\+?[+]([0-9]{2})[ ][(]([0-9]{2})[)][ ]?([0-9]{5})[-. ]([0-9]{4})$/
      }
    }
  })
  return Contact
}
