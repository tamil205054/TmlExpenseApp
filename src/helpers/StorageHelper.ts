import AsyncStorage from '@react-native-async-storage/async-storage';

class StorageHelper {
  
  // Save data to AsyncStorage
  static async save<T>(key: string, value: T): Promise<void> {
    try {
      await AsyncStorage.setItem(key,JSON.stringify(value));
      console.log('Data saved successfully!');
    } catch (error) {
      console.error('Failed to save the data to the storage', error);
    }
  }

  // Retrieve data from AsyncStorage
  static async get<T>(key: string): Promise<T | null> {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        console.log('Data retrieved:', value);
        return JSON.parse(value);
      }
      return null;
    } catch (error) {
      console.error('Failed to fetch the data from storage', error);
      return null;
    }
  }

  // Remove data from AsyncStorage
  static async remove(key: string): Promise<void> {
    try {
      await AsyncStorage.removeItem(key);
      console.log('Data removed successfully!');
    } catch (error) {
      console.error('Failed to remove the data from storage', error);
    }
  }

  // Clear all data from AsyncStorage (optional utility method)
  static async clear(): Promise<void> {
    try {
      await AsyncStorage.clear();
      console.log('All data cleared successfully!');
    } catch (error) {
      console.error('Failed to clear the storage', error);
    }
  }
}

export default StorageHelper;
