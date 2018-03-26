import SafariView from 'react-native-safari-view';
import { Platform } from 'react-native';
import { DropDownManager } from '../utils/DropDownManager';

export const openURL = url => {
  Platform.OS === 'ios' ? openSafariView(url) : openAndroidBrowser(url);
};

const openSafariView = url => {
  SafariView.isAvailable()
    .then(
      SafariView.show({
        url: url
      })
    )
    .catch(() =>
      DropDownManager.getDropDown().alertWithType(
        'error',
        'Error',
        'Oops, could not open Safari at this time.'
      )
    );
};
