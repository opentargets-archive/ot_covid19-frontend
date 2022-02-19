# Open Targets COVID-19 Target Prioritisation Tool - frontend codebase

**February 2022 Update:**

The Open Targets COVID-19 Target Prioritisation Tool has been deprecated and archived. For more information, please see [opentargets/platform#1964](https://github.com/opentargets/platform/issues/1964) and [this Community thread](https://community.opentargets.org/t/open-targets-covid-19-target-prioritisation-tool-deprecation-and-archive-notice/430).

If you wish to run this code locally or deploy, please remove the `_redirects` file in the `public` directory. As noted in [pull request #17](https://github.com/opentargets/ot_covid19-frontend/pull/17), the COVID-19 Target Prioritisation Tool URL -- `https://covid19.opentargets.org/` -- now redirects to [the COVID-19 associations page on the Open Targets Platform](https://platform.opentargets.org/disease/MONDO_0100096/associations).  

### Instructions

The latest data available in the COVID-19 Target Prioritisation Tool was generated using the 21.02 release data for the Open Targets Platform. Please see [#1324](https://github.com/opentargets/platform/issues/1324) for more information.

Based on a review of the notes in [#1160](https://github.com/opentargets/platform/issues/1160) and the `update.js` file in the `ot_covid19-frontend` repository, the process to refresh the data is:

1. Download the latest release data in JSON (`.zip`) format
2. Rename the file to `targets_integrated_data-rev_10.zip`
3. Upload the `.zip` file in the open-targets-covid-prioritisation bucket
4. Update the `current_revision.json` to be: 

<pre>
{
"current_revision": "targets_integrated_data-rev_10"
}
</pre>

During the deployment process, there are three things that are important to remember:

* The file type must be `.zip` as `.gzip` files will not be processed correctly. If the file type in the Google Cloud bucket is `.gzip`, you will see the following console log error:</li>

![Screenshot](https://user-images.githubusercontent.com/7490258/108068035-7f97ff00-7059-11eb-96a1-2ff51d371295.png)

* The JSON file contained in the `.zip` file must have a `.json` extension. If the file does not have a `.json` extension, you will see the following console log error:

![Screenshot](https://user-images.githubusercontent.com/7490258/108068211-b110ca80-7059-11eb-8568-39a2c6b15c18.png)

* Google caches the [current_revision.json file](https://storage.googleapis.com/open-targets-covid-prioritisation/current_revision.json) for a default of 3600 seconds, which can cause issues with the console log showing the incorrect version. To fix this, you can re-upload the `current_revision.json` file and adjust the `Cache-Control` metadata and set to `no-cache`.