import useDrivePicker from 'react-google-drive-picker'
const GoogleDrivePicker = () => {
    const [openPicker, authResponse] = useDrivePicker();
    const handleOpenPicker = () => {
        openPicker({
          clientId: "xxxxxxxxxxxxxxxxx",
          developerKey: "xxxxxxxxxxxx",
          viewId: "DOCS",
          // token: token, // pass oauth token in case you already have one
          showUploadView: true,
          showUploadFolders: true,
          supportDrives: true,
          multiselect: true,
          // customViews: customViewsArray, // custom view
          callbackFunction: (data) => {
            if (data.action === 'cancel') {
              console.log('User clicked cancel/close button')
            }
            console.log(data)
          },
        })
      }
    return (
        <div>
        <button onClick={() => handleOpenPicker()}>Open Picker</button>
    </div>
    );
};

export default GoogleDrivePicker;