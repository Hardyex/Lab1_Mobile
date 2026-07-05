import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 50,
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25,
  },

  label: {
    fontSize: 16,
    marginBottom: 6,
    fontWeight: '500',
  },

  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 18,
  },

  button: {
    marginBottom: 20,
  },

  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;